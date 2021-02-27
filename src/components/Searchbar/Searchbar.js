import { Component } from 'react';
import PropTypes from 'prop-types';
import { showErrorNotification } from '../Notification';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;
    if (!query.trim()) {
      showErrorNotification('Input search query.', { position: 'top-center' });
      return this.setState({ query: '' });
    }
    onSubmit(query.trim().toLowerCase());
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <div className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            name="query"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
