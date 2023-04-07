import axios from 'axios';

const apiKey = 'u4wOJkEcCFB44WNH7OIZ';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books/`;
export const getBook = async () => {
  const response = axios.get(url)
  return response;
}