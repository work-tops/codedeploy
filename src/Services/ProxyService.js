import axios from "axios";
import {baseUrl} from "../Constants/Config";

export const getAllData = (url) => {
    return axios.get(baseUrl + url);
}
export const getDataById = (url) => {
    return axios.delete(baseUrl + url);
}
export const createData = (url,data) => {
    return axios.post(baseUrl + url,data);
}
export const updateData = (url,data) => {
    return axios.put(baseUrl + url,data);
}
export const deleteData = (url) => {
    return axios.delete(baseUrl + url);
}