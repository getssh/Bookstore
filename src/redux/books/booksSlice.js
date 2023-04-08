import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBook, createBook, deleteBook } from '../../api';

export const getBooks = createAsyncThunk('books/getBooks', getBook);
export const addBook = createAsyncThunk('books/addBook',
  async (bookData) => {
    const response = await createBook(bookData);
    return response.data;
  });
export const removeBook = createAsyncThunk('books/removeBook',
  async (id) => {
    const response = await deleteBook(id);
    return response;
  });

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(getBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: action.payload,
      }))
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      .addCase(addBook.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(removeBook.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default bookSlice.reducer;
