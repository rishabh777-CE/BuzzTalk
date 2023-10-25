import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://buzztalk-backend-m8j1.onrender.com',
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
