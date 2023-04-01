import './Book.css';
import { useState } from 'react';
import BookInfo from './bookInfo/BookInfo';

const Book = () => {
  const [bookData, setBookData] = useState([]);

  const handleAddBook = (book) => {
    setBookData([...bookData, book]);
  };
  return (
    <div>
      <h2>Book Store</h2>
      <ul>
        {bookData.map((book) => (
          <li key={bookData.length}>
            {book.bookName}
            {' '}
            by
            {' '}
            {book.authorName}
          </li>
        ))}
      </ul>
      <BookInfo onSubmit={handleAddBook} />
    </div>
  );
};

export default Book;
