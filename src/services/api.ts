import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://5a04-2804-14c-de87-9e74-56c5-859b-94f6-cc13.ngrok.io'
})