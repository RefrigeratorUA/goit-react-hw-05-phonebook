import { Component } from 'react';
import Loader from '../components/Loader';
import { fetchPopularMovies } from '../services/themoviedb-api';
import MoviesList from '../components/MoviesList';

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    await fetchPopularMovies()
      .then(movies => {
        this.setState({ movies });
      })
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        {isLoading && <Loader />}
        {movies.length > 0 && <MoviesList movies={movies} />}
      </>
    );
  }
}

export default HomePage;
