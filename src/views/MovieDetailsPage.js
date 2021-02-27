import { Component } from 'react';
import { fetchMovieByID } from '../services/themoviedb-api';
import routes from '../routes';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Card from '../components/Card';
import AddInfo from '../components/AddInfo';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    locationFrom: null,
    isLoading: false,
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    const { location } = this.props;
    // Когда я нажимаю на Cast или Reviews, то меняю history и location.
    // Потом нужно неоднократно нажимать button BACK, что-бы на /movies вернуться
    // Это костыль для BUTTON BACK )))
    const locationFrom = location?.state?.from ? location.state.from : null;
    this.setState({ locationFrom });

    if (this.props.match?.params?.movieId) {
      const {
        match: {
          params: { movieId },
        },
      } = this.props;
      await fetchMovieByID(movieId)
        .then(movie => this.setState({ movie }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleButtonBack = () => {
    const { history } = this.props;
    const { locationFrom } = this.state;
    history.push(locationFrom || routes.home);
  };

  render() {
    const { match } = this.props;
    const { movie, isLoading } = this.state;
    return (
      <>
        {movie && (
          <div className="Container">
            <hr />
            <Button onClick={this.handleButtonBack} />
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <Card movie={this.state.movie} />
                <AddInfo url={match.url} path={match.path} />
              </>
            )}
          </div>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
