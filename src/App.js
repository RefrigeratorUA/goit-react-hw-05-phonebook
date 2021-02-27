import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './components/Loader';
import AppBar from './components/AppBar';
import routes from './routes';

const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName: "home-page" */));
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "details-page" */),
);
const MoviesPage = lazy(() => import('./views/MoviesPage' /* webpackChunkName: "movies-page" */));

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} exact component={MoviesPage} />
          <Route component={HomePage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
