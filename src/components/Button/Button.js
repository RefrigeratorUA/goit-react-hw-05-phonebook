import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button type="button" className="Button" onClick={() => onClick()}>
      Back
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
