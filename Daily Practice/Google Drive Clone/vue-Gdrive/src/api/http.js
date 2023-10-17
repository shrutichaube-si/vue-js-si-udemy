import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
//const BASE_URL = process.env.VUE_APP_API_BASE_URL;

const http = axios.create({
    // baseURL: "http://localhost:3030"
    baseURL: BASE_URL,
});

export default http;
//http.get('.files')