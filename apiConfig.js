// src/config/apiConfig.js
import axios from "axios";

export const API_BASE_URL = "https://payroll-server-production-4a1f.up.railway.app/"

// "http://localhost:8080"; // or your production URL

// token should be fetched dynamically for each request
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// Interceptor to add token dynamically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
