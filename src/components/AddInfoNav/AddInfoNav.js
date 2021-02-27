import { NavLink, withRouter } from 'react-router-dom';
import routes from '../../routes';

function AddInfoNav({ url, location }) {
  return (
    <ul>
      <li>
        <NavLink
          exact
          to={{
            pathname: `${url}${routes.cast}`,
            state: {
              from: location,
            },
          }}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to={{
            pathname: `${url}${routes.reviews}`,
            state: {
              from: location,
            },
          }}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
}

export default withRouter(AddInfoNav);
