import './BookStatus.css';
import PropTypes from 'prop-types';

const BookStatus = ({ completed, percent }) => (
  <div>
    <h4>{percent}</h4>
    <p>{completed}</p>
  </div>
);

BookStatus.propTypes = {
  completed: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
};

export default BookStatus;
