import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBook } from '../../api';
// id u4wOJkEcCFB44WNH7OIZ
const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [
        ...state.books,
        {
          item_id: action.payload.item_id,
          title: action.payload.title,
          author: action.payload.author,
          category: '',
        },
      ],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
