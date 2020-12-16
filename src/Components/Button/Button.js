import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ uploadMorePhotos }) => {
  return (
    <button
      className={s.Button}
      type="button"
      onClick={() => uploadMorePhotos()}
    >
      Load More
    </button>
  );
};

Button.prototype = {
  uploadMorePhotos: PropTypes.func.isRequired,
};

export default Button;
