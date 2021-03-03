import PropTypes from 'prop-types';
import './Logo.css';

const Logo = ({ nodeRef }) => {
  return (
    <h1 className="logo" ref={nodeRef}>
      Phonebook
    </h1>
  );
};

Logo.propTypes = {
  nodeRef: PropTypes.object,
};

export default Logo;
