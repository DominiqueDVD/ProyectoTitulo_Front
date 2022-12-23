import axios from "axios";

export const BASE_URL = "http://localhost:64578/v1";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
