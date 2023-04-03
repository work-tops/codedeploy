import axios from "axios";
import {baseUrl} from "../Constants/Config";


const baseUrl = Config.baseUrl;

export const loginUser = (url,data) => {
    return axios.post(baseUrl + url,data);
}
export const registerUSer = (url,data) => {
    return axios.post(baseUrl + url,data);
}
export const getUserDetails = (url) => {
    return axios.get(baseUrl + url);
}
export const getAllUsers = (url) => {
    return axios.get(baseUrl + url);
}