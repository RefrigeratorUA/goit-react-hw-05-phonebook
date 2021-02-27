import { Component } from 'react';
import parseQueryString from '../utils/parseQueryString';
import SearchBar from '../components/Searchbar';
import { NotificationContainer } from '../components/Notification';
import { fetchMoviesByQuery } from '../services/themoviedb-api';
import MoviesList from '../components/MoviesList';

class MoviesPage extends Component {
  state = {
    movies: [],
    error: null,
  };
  async componentDidMount() {
    const { query } = parseQueryString(this.props.location.search);
    if (query) {
      await this.handleFetchhMovies(query);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = parseQueryString(prevProps.location.search);
    const { query } = parseQueryString(this.props.location.search);
    if (prevQuery !== query) {
      await this.handleFetchhMovies(query);
    }
  }

  handleFetchhMovies = query => {
    fetchMoviesByQuery(query).then(movies => {
      if (movies.length === 0) {
        return this.setState({ movies: [], error: 'Нет результатов' });
      }
      this.setState({ movies, error: null });
    });
  };

  handleQueryFromSearchbar = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, error } = this.state;
    const { query } = parseQueryString(this.props.location.search);
    return (
      <>
        <SearchBar onSubmit={this.handleQueryFromSearchbar} />
        {!error ? (
          <MoviesList movies={movies} />
        ) : (
          <h1>
            Нет совпадений по запросу <i>"{query}"</i>
          </h1>
        )}
        <NotificationContainer />
      </>
    );
  }
}

export default MoviesPage;
