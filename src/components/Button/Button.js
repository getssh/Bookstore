import './Buttons.css';
import PropTypes from 'prop-types';

const Button = ({ btnText, btnAction, btnType }) => (
  <button type={btnType === 'button' ? 'button' : 'submit'} onClick={btnAction}>{btnText}</button>
);

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnAction: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired,
};

export default Button;
