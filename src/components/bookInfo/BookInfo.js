import './BookInfo.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

function BookInfo({ onSubmit }) {
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ bookName, authorName });
    setBookName('');
    setAuthorName('');
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
      <button type="submit">Add Book</button>
    </form>
  );
}

BookInfo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BookInfo;
