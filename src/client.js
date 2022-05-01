import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost/todo-api-2/api/',
});

export default client;
