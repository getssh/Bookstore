import './Book.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookInfo from './bookInfo/BookInfo';
import SingleBook from './SingleBook/SingleBook';
import { getBooks } from '../redux/books/booksSlice';

const Book = () => {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks);
  }, [dispatch]);

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
          {books.map((book) => (
            <div key={book.item_id}>
              <SingleBook
                bookName={book.title}
                authorName={book.author}
                id={book.item_id}
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
