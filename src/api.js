import axios from 'axios';

const apiKey = '401nsfJAaLLrOnazqcuE';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${apiKey}/books/`;
export const getBook = async () => {
  const response = await axios.get(url);
  return response.data;
};

export const createBook = async (book) => {
  const response = await axios.post(url, book);
  return response.data;
};

export const deleteBook = async (id) => {
  const response = await axios.delete(`${url}${id}`, id);
  return response.id;
};
