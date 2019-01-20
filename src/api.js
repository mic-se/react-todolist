import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.API_BASE_URL}`,
  maxContentLength: 0
});

export default api;
