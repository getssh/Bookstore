import './SingleBook.css';
import PropTypes from 'prop-types';

const SingleBook = ({ bookName, authorName }) => (
  <li>
    {bookName}
    {' '}
    by
    {' '}
    {authorName}
  </li>
);

SingleBook.propTypes = {
  bookName: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
};

export default SingleBook;
