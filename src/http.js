import axios from "axios";

axios.defaults.timeout = 8000;

// set global authorization token
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  }
);

export default axios;
