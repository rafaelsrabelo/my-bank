import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://ea12-2804-14c-de87-9e74-75e1-14f9-1a02-3022.ngrok.io'
})