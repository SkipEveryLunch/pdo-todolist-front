import axios from 'axios';

const client = axios.create({
  baseURL: 'https://pdo-todo-api.herokuapp.com/api/',
});

export default client;
