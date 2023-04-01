import './Buttons.css';
import PropTypes from 'prop-types';

const Buttons = ({ btnText }) => (
  <button type="button">{btnText}</button>
);

Buttons.propTypes = {
  btnText: PropTypes.string.isRequired,
};

export default Buttons;
