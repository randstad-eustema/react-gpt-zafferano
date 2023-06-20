import axios from "axios";

const ApiOpenAiClient = axios.create({
  baseURL: process.env.REACT_APP_API_OPEN_API_BASE_URL,
  timeout: 10000,
});

// Add a request interceptor
ApiOpenAiClient.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${process.env.REACT_APP_API_OPEN_API_TOKEN}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default ApiOpenAiClient;
