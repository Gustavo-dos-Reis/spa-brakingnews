import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = 'http://localhost:3001';

export function getAllPosts(){
    const response = axios.get(`${baseUrl}/posts`);

    return response;
}

export function getTopPost(){
    const response = axios.get(`${baseUrl}/posts/top`);

    return response;
}

export function searchPosts(title){
    const response = axios.get(`${baseUrl}/posts/search?title=${title}`);

    return response;
}

export function getAllPostsByUser() {
    const response = axios.get(`${baseUrl}/posts/byUserId`,{
        headers:{
            Authorization: `Bearer ${Cookies.get("token")}`,
        },
    });
    return response;
}
