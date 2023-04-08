import './Book.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookInfo from './bookInfo/BookInfo';
import SingleBook from './SingleBook/SingleBook';
import { getBooks } from '../redux/books/booksSlice';

const Book = () => {
  const {
    books, isLoading, error,
  } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [books, dispatch]);

  return (
    <div>
      <h2>Book Store</h2>
      {
        isLoading
        && (
        <div>
          <h2>Loading...</h2>
        </div>
        )
      }
      {
        error
        && (
        <div>
          <h3>Error...</h3>
        </div>
        )
      }
      <div>
        <ul>
          {Object.keys(books).map((book) => (
            <div key={book}>
              <SingleBook
                book={books[book][0]}
                id={book}
              />
            </div>
          ))}
        </ul>
      </div>
      <BookInfo />
    </div>
  );
};

export default Book;
