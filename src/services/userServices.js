import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3001";

export async function signup(data) {
    delete data.confirmPassword;
    const body = {
        ...data,
        username: generateUserName(data.name),
        avatar: "https://i.imgur.com/xmI2QAo.jpg",
        background: "https://i.imgur.com/XbRg9D7.png",
    };

    try {
        console.log("Enviando dados para o servidor:", body);
        const response = await axios.post(`${baseURL}/user/create`, body);
        return response;
    } catch (error) {
        console.error("Erro ao criar o usuário:", error.response?.data || error.message);
        throw error;
    }
}

export async function signin(data) {
    try {
        const response = await axios.post(`${baseURL}/auth/login`, data);
        return response;
    } catch (error) {
        console.error("Erro durante o login:", error.response?.data || error.message);
        throw error; 
    }
}

export function userLogged(){
    const token = Cookies.get("token");

    if (!token) {
        console.error("Token de autenticação não encontrado.");
        return Promise.reject("Token de autenticação não encontrado.");
    }

    const response = axios.get(`${baseURL}/user/findById`,{
        headers: {
            Authorization:`Bearer ${Cookies.get("token")}`,
        }
    });
    return response;
}

function generateUserName(name){
    const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
}