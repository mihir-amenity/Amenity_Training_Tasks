import axios from "axios";

const api = axios.create({
  baseURL: "https://shawanda-abiding-rayne.ngrok-free.dev/api",
  withCredentials: true,
  headers: {
    // "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    
  },
});

export default api;
