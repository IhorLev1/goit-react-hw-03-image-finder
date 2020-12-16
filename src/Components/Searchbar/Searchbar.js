import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleSearch = ({ target }) => {
    const { value } = target;
    this.setState({ search: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { search } = this.state;
    const { onSubmitForm } = this.props;

    if (search.trim() === '') {
      return toast.error('Please enter something to start your search!');
    }

    onSubmitForm(search);
    this.reset();
  };

  reset = () => {
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;

    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleSearch}
            value={search}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Searchbar;
