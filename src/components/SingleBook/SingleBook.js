import './SingleBook.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { removeBook } from '../../redux/books/booksSlice';

const SingleBook = ({ book, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="single-book">
      <div className="first-col">
        <span className="book-category">Action</span>
        <span className="book-title">{book.title}</span>
        <span className="book-author">{book.author}</span>
        <div className="book-links">
          <button type="button">Comments</button>
          <Button
            className="remove-link"
            btnText="Remove"
            btnAction={handleDelete}
            btnType="button"
          />
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-status">
        <div className="status-circle" />
        <div className="status-percent">
          <span className="percent-num">64%</span>
          <span className="completed">completed</span>
        </div>
      </div>
    </div>
  );
};

SingleBook.propTypes = {
  book: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default SingleBook;
