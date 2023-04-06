import './Book.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import BookInfo from './bookInfo/BookInfo';
import SingleBook from './SingleBook/SingleBook';

const Book = () => {
  const books = useSelector((state) => state.books.books);
  console.log(Array.isArray(books));
  const [bookData, setBookData] = useState([]);

  const handleAddBook = (book) => {
    setBookData([...bookData, book]);
  };
  return (
    <div>
      <h2>Book Store</h2>
      <ul>
        {books.map((book) => (
          <SingleBook
            key={book.item_id}
            bookName={book.title}
            authorName={book.author}
          />
        ))}
      </ul>
      <BookInfo onSubmit={handleAddBook} />
    </div>
  );
};

export default Book;
