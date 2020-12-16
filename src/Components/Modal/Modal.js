import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  closeByBackDrop = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    const { largeImageURL } = this.props;

    return createPortal(
      <div className={s.Overlay} onClick={this.closeByBackDrop}>
        <div className={s.Modal}>
          <img className={s.Img} src={largeImageURL} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
