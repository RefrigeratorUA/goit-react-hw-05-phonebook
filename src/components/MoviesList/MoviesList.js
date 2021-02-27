import { Link, withRouter } from 'react-router-dom';
import routes from '../../routes';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className="MoviesList">
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `${routes.movies}/${id}`,
              state: {
                from: location,
              },
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
