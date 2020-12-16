import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags, onClickImage }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItem_image}
        src={webformatURL}
        alt={tags}
        onClick={onClickImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
