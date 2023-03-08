import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://d786-2804-14c-de87-9e74-d4b5-182c-19bb-df66.ngrok.io'
})