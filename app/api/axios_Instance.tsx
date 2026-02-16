import axios from "axios";

const instance = axios.create({
  // baseURL: "https://api.fertigoapp.com",
  baseURL: "http://localhost:5200",
  headers: {
    Accept: "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default instance;
