import PropTypes from 'prop-types';
import s from './ImageGallary.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGallaryItem';

const ImageGallery = ({ imgArray, onClickImage }) => {
  return (
    imgArray.length > 0 && (
      <ul className={s.ImageGallery}>
        {imgArray.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            onClickImage={() => onClickImage(largeImageURL)}
          />
        ))}
      </ul>
    )
  );
};
ImageGallery.propTypes = {
  imgArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
  onClickImage: PropTypes.func.isRequired,
};

// ImageGallary.propTypes = {
//   imgArray: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImgURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     }),
//   ),
//   onClickImage: PropTypes.func.isRequired,
// };

export default ImageGallery;
