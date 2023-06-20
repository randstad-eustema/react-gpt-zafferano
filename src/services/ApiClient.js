import axios from "axios";
import auth from "../helpers/auth";

const ApiClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/`,
  timeout: 1000,
});

// Add a request interceptor
ApiClient.interceptors.request.use(
  function (config) {
    if (auth.getToken()) {
      config.headers.Authorization = `Bearer ${auth.getToken()}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
ApiClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      auth.removeAll();
      window.location.href = window.location.origin + "/login";
    }
    return Promise.reject(error);
  }
);

export default ApiClient;
