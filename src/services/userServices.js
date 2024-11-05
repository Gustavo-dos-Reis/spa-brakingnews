import axios from "axios";
import Cookies from "js-cookie";
import { DEFAULT_USER_AVATAR, DEFAULT_USER_BACKGROUND } from "../config";

const baseURL = "http://localhost:3001";

export async function signup(data) {
    delete data.confirmPassword;
    const body = {
        ...data,
        username: generateUserName(data.name),
        avatar: DEFAULT_USER_AVATAR,
        background: DEFAULT_USER_BACKGROUND,
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

export async function userLogged() {
    const token = Cookies.get("token");

    if (!token) {
        console.error("Token de autenticação não encontrado.");
        return Promise.reject("Token de autenticação não encontrado.");
    }

    try {
        const response = await axios.get(`${baseURL}/user/findById`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        // Suponha que o ID do usuário está em response.data._id
        const userId = response.data._id;
        localStorage.setItem("userId", userId); // Armazene o ID para uso em updateUserProfile
        return response;
    } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        throw error;
    }
}


// Nova função para atualizar o perfil do usuário
export async function updateUserProfile(data) {
    const token = Cookies.get("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
        console.error("Token ou ID do usuário não encontrado.");
        return Promise.reject("Token ou ID do usuário não encontrado.");
    }

    try {
        const response = await axios.patch(`${baseURL}/user/update/${userId}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        console.error("Erro ao atualizar o perfil do usuário:", error.response?.data || error.message);
        throw error;
    }
}

function generateUserName(name) {
    const nameLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    return `${nameLowerCaseWithoutSpaces}-${randomNumber}`;
}
