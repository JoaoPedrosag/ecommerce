import axios from 'axios';

export const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';

const instance = axios.create({
  baseURL
});

export default instance;