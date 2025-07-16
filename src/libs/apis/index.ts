import axios from "axios";

const axiosClient = axios.create({
  baseURL: "",
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(function (response) {
  return response;
});

export default axiosClient;
