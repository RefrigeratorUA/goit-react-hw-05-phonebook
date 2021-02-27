import { Component } from 'react';
import { fetchReviewsMovie } from '../../services/themoviedb-api';

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    if (this.props.match.params && this.props.match.params.movieId) {
      const {
        match: {
          params: { movieId },
        },
      } = this.props;
      await fetchReviewsMovie(movieId).then(reviews => this.setState({ reviews: [...reviews] }));
    }
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        {reviews.length > 0 ? (
          <ul className="RevList">
            {reviews.map(({ author, content }, index) => (
              <li key={index}>
                <p>
                  <b>{author}</b>
                </p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h1>No reviews!</h1>
        )}
      </>
    );
  }
}

export default Reviews;
