import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://df52-2804-14c-de87-9e74-9f58-86a5-5090-d05c.ngrok.io'
})