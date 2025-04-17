import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://app.help7.com.br',
  withCredentials: true
});

export default axiosInstance;
