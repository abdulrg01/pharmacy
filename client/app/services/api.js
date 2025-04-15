import axios from "axios";

const api = axios.create({
  // baseURL: process.env.REACT_APP_API_URL || "http://localhost:3500",
  baseURL: "http://localhost:3500",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// User API endpoints
export const userAPI = {
  login: (credentials) => api.post("/auth/login", credentials),

  register: (userData) => api.post("/auth/register", userData),

  socialAuth: (credentials) => api.post("/auth/social", credentials),

  getUser: (name) => api.get(`/users/get-user`, name),
};

export default api;
