import './Book.css';
import { useSelector } from 'react-redux';
import BookInfo from './bookInfo/BookInfo';
import SingleBook from './SingleBook/SingleBook';

const Book = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div>
      <h2>Book Store</h2>
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
      <BookInfo />
    </div>
  );
};

export default Book;
