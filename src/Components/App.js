import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar';
import fetchImgWithQuery from '../PixabayApi';
import ImageGallery from './ImageGallary';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';

import s from './App.module.css';

class App extends Component {
  state = {
    search: '',
    page: 1,
    imgArray: [],
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    error: null,
  };

  onChangeQuery = async data => {
    this.setState({ search: data, page: 1, isLoading: true, error: null });

    try {
      const request = await fetchImgWithQuery(data);
      this.setState(({ page }) => ({ imgArray: [...request], page: page + 1 }));
      this.scrollImg();
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  uploadMorePhotos = async () => {
    const { search, page } = this.state;
    this.setState({ isLoading: true });

    try {
      const request = await fetchImgWithQuery(search, page);
      this.setState(({ imgArray, page }) => ({
        imgArray: [...imgArray, ...request],
        page: page + 1,
      }));
      this.scrollImg();
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  scrollImg = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onClickImage = largeImageURL => {
    this.setState({ largeImageURL: largeImageURL });
    this.toggleModal();
  };

  render() {
    const {
      imgArray,
      isLoading,
      showModal,
      largeImageURL,
      error,
      search,
    } = this.state;

    const imgFound = imgArray.length > 0 && !error;
    const imgNotFound = search && imgArray.length === 0 && !error && !isLoading;

    return (
      <div className={s.Container}>
        <Searchbar onSubmitForm={this.onChangeQuery} />
        {error && <p>Whoops, something went wrong. Try again.</p>}
        {imgFound && (
          <>
            <ImageGallery
              onClickImage={this.onClickImage}
              imgArray={imgArray}
            />
            {!isLoading && <Button uploadMorePhotos={this.uploadMorePhotos} />}
            {isLoading && <Loader />}
            {showModal && (
              <Modal
                largeImageURL={largeImageURL}
                toggleModal={this.toggleModal}
              />
            )}
          </>
        )}
        {imgNotFound && (
          <p>No results were found for your search. Try again.</p>
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
