import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBook, createBook } from '../../api';
// id u4wOJkEcCFB44WNH7OIZ

export const getBooks = createAsyncThunk('books/getBook', getBook);
export const addBook = createAsyncThunk('books/craeteBook',
  async (bookData) => {
    const response = await createBook(bookData);
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
  reducers: {
    // addBook: (state, action) => ({
    //   ...state,
    //   books: [
    //     ...state.books,
    //     {
    //       item_id: action.payload.item_id,
    //       title: action.payload.title,
    //       author: action.payload.author,
    //       category: '',
    //     },
    //   ],
    // }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        books: action.payload,
      }))
      .addCase(getBooks.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
      }));
  },
});

export const { removeBook } = bookSlice.actions;
export default bookSlice.reducer;
