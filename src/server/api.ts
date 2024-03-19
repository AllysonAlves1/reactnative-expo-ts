import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.31.88.79:3000"
})