import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dtmoney-6d4t.onrender.com',
});
