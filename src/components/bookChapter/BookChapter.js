import './BookChapter.css';
import PropTypes from 'prop-types';

const BookChapter = ({ chapter }) => (
  <div>
    <h5>CURRENT CHAPTER</h5>
    <p>{chapter}</p>
    <button type="button">UPDATE PROGRESS</button>
  </div>
);

BookChapter.propTypes = {
  chapter: PropTypes.string.isRequired,
};

export default BookChapter;
