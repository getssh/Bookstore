import './Book.css';
import { useState } from 'react';
import BookInfo from './bookInfo/BookInfo';
import SingleBook from './SingleBook/SingleBook';

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
          <SingleBook
            key={bookData.length}
            bookName={book.bookName}
            authorName={book.authorName}
          />
        ))}
      </ul>
      <BookInfo onSubmit={handleAddBook} />
    </div>
  );
};

export default Book;
