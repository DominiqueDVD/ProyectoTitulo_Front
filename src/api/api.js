import axios from "axios";

export const BASE_URL = "https://evaluacionaccesible.netlify.app/v1";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
