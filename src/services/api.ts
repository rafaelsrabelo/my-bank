import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://a424-2804-14c-de87-9e74-11c7-ab4d-21e9-cd48.ngrok.io'
})