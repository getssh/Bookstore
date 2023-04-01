import './BookInfo.css';
import PropTypes from 'prop-types';

const BookInfo = ({ catagory, title, author }) => (
  <div>
    <p>{catagory}</p>
    <h3>{title}</h3>
    <p>{author}</p>
  </div>
);

BookInfo.propTypes = {
  catagory: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookInfo;
