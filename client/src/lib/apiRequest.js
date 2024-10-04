import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://homequest-mtqy.onrender.com/api",
    withCredentials: true,
});

export default apiRequest;