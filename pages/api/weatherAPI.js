import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.openweathermap.org',
  params: {
    appid: 'adff9b2744c40831c29bd195c015f6a1',
  },
});
