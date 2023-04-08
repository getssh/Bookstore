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
    <li>
      <span>{book.title}</span>
      {' '}
      By
      {' '}
      <span>{book.author}</span>
      {' '}
      <Button
        btnText="Remove"
        btnAction={handleDelete}
        btnType="button"
      />
    </li>
  );
};

SingleBook.propTypes = {
  book: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default SingleBook;
