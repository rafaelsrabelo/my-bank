import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://5f2b-2804-14c-de87-9e74-da5-d374-e40a-b632.ngrok.io'
})