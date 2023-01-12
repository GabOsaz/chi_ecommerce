import axios from 'axios';

const reqInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CHI_BASEURL,
  headers: {
    accept: 'application/json',
    'X-API-KEY': process.env.NEXT_PUBLIC_CHI_API_KEY,
  },
});

export default reqInstance;
