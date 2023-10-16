import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const http = axios.create({
    baseURL: BASE_URL
});

console.log(typeof(http))
export default http;
