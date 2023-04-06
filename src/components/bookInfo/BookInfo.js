import './BookInfo.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../../redux/books/booksSlice';
import Button from '../Button/Button';

function BookInfo() {
  const dispatch = useDispatch();
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (bookName.trim() && authorName.trim()) {
      dispatch(addBook({ item_id: uuid(), title: bookName, author: authorName }));
      setBookName('');
      setAuthorName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={bookName}
        onChange={(event) => setBookName(event.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={authorName}
        onChange={(event) => setAuthorName(event.target.value)}
        placeholder="Author"
      />
      <Button btnText="Add Book" btnAction={handleSubmit} btnType="submit" />

    </form>
  );
}

export default BookInfo;
