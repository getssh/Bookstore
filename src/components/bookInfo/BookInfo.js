import './BookInfo.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../../redux/books/booksSlice';

function BookInfo() {
  const dispatch = useDispatch();
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (bookName.trim() && authorName.trim()) {
      dispatch(addBook({
        item_id: uuid(), title: bookName, author: authorName, category: '',
      }));
      setBookName('');
      setAuthorName('');
    }
    setBookName('');
    setAuthorName('');
  };

  return (
    <div className="form-wraper">
      <h2 className="bookform-title">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <input
          type="text"
          value={bookName}
          onChange={(event) => setBookName(event.target.value)}
          placeholder=" Book title"
          required
          className="book-name"
        />
        <input
          type="text"
          value={authorName}
          onChange={(event) => setAuthorName(event.target.value)}
          placeholder="Author name"
          required
          className="author-name"
        />
        <button onClick={handleSubmit} type="button" className="add-btn">ADD BOOK</button>
      </form>
    </div>
  );
}

export default BookInfo;
