import './Buttons.css';
import PropTypes from 'prop-types';

const Buttons = ({ btnText, removeBook }) => (
  <button type="button" onClick={removeBook}>{btnText}</button>
);

Buttons.propTypes = {
  btnText: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Buttons;
