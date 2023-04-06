import './SingleBook.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import { removeBook } from '../../redux/books/booksSlice';

const SingleBook = ({ bookName, authorName, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {bookName}
      {' '}
      by
      {' '}
      {authorName}
      {' '}
      <Button
        btnText="Remove"
        btnAction={() => dispatch(removeBook(id))}
        btnType="button"
      />
    </li>
  );
};

SingleBook.propTypes = {
  bookName: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SingleBook;
