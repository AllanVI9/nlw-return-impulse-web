import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'https://nlw-return-impulse-web-production-d4f8.up.railway.app'
});
