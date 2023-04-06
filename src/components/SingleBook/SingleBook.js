import './SingleBook.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Buttons from '../Buttons/Buttons';
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
      <Buttons
        btnText="Remove"
        removeBook={() => dispatch(removeBook(id))}
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
