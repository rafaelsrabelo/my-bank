import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://f941-2804-14c-de87-9e74-9ec5-2f2f-f25-a07d.ngrok.io'
})