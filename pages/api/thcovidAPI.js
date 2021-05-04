import axios from 'axios';

export default axios.create({
  baseURL: 'https://covid19.th-stat.com',
});
