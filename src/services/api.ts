import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://c803-2804-14c-de87-9e74-bb47-db86-d3e3-10bf.ngrok.io'
})