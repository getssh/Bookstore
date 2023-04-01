import './SingleBook.css';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/Buttons';

const SingleBook = ({ bookName, authorName }) => (
  <li>
    {bookName}
    {' '}
    by
    {' '}
    {authorName}
    {' '}
    <Buttons btnText="Remove" />
  </li>
);

SingleBook.propTypes = {
  bookName: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
};

export default SingleBook;
