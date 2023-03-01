import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://7c4d-2804-14c-de87-9e74-9393-52da-30fe-66c5.ngrok.io'
})