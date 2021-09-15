import axios from 'axios';

export default axios.create({
  baseURL: 'https://create-a-list.herokuapp.com'
});