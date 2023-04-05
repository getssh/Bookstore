import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const initialState = { books: [] };

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({
        bookId: uuid(),
        name: action.payload.name,
        author: action.payload.author,
      });
    },
    removeBook: (state, action) => {
      state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
