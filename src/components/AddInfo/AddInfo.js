import PropTypes from 'prop-types';
import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import AddInfoNav from '../AddInfoNav';

const Cast = lazy(() => import('../Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() => import('../Reviews' /* webpackChunkName: "reviews" */));

const AddInfo = ({ url, path }) => {
  return (
    <>
      <h4>Additional information</h4>
      <AddInfoNav url={url} />
      <Suspense>
        <Switch>
          <Route path={`${path}${routes.cast}`} component={Cast} />
          <Route path={`${path}${routes.reviews}`} component={Reviews} />
        </Switch>
      </Suspense>
    </>
  );
};

AddInfo.propTypes = {
  url: PropTypes.string,
  path: PropTypes.string,
};

export default AddInfo;
