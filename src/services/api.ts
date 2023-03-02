import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://fada-2804-14c-de87-9e74-109c-c193-8a17-51fd.ngrok.io'
})