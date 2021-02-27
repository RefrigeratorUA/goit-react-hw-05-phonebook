import { BASE_IMG_URL } from '../../services/themoviedb-api';
import ImgNotFound from '../../images/image-not-found.svg';
import PropTypes from 'prop-types';

const Card = ({ movie }) => {
  const {
    title = 'Упс! Что пошло не так...',
    poster_path = '',
    vote_average = 0,
    overview = '',
    genres = [],
  } = movie;
  return (
    <div className="Card">
      <h1>{title}</h1>
      <img src={poster_path ? `${BASE_IMG_URL}${poster_path}` : ImgNotFound} alt={title} />
      <p>User Score: {vote_average > 0 ? vote_average * 10 : 0}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres.length > 0 && (
        <ul>
          {genres.map((gender, index) => (
            <li key={index}>{gender.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Card;
