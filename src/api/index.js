import axios from 'axios';
import config from './config';

const path = `${config.protocol}://${config.host}${config.prefix}`;

const api = axios.create({
  baseURL: path,
  withCredentials: true
});

api.interceptors.response.use((response) => {
  console.log(response);
  return response.data;
}, (err) => {
  console.log(err);
  return err.response;
});

export default api;
