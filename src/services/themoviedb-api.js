import Axios from 'axios';

const API_KEY = '8add86c956039dd3121ecd9270a2bde1';
const BASE_URL = 'https://api.themoviedb.org/3/';
const URL_POPULAR = `${BASE_URL}trending/movie/day`;
const URL_ID = `${BASE_URL}movie/`;
const URL_QUERY = `${BASE_URL}search/movie`;

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/';

function fetchPopularMovies() {
  return Axios.get(`${URL_POPULAR}`, {
    params: { page: 1, api_key: API_KEY },
  })
    .then(({ data: { results } }) => results)
    .catch(error => error);
}

function fetchMovieByID(id) {
  return Axios.get(`${URL_ID}${id}`, {
    params: { api_key: API_KEY, language: 'en-US' },
  })
    .then(({ data }) => data)
    .catch(error => error);
}

function fetchCreditsMovie(id) {
  return Axios.get(`${URL_ID}${id}/credits`, {
    params: { api_key: API_KEY, language: 'en-US' },
  })
    .then(({ data: { cast } }) => cast)
    .catch(error => error);
}

function fetchReviewsMovie(id) {
  return Axios.get(`${URL_ID}${id}/reviews`, {
    params: { page: 1, api_key: API_KEY, language: 'en-US' },
  })
    .then(({ data: { results } }) => results)
    .catch(error => error);
}

function fetchMoviesByQuery(query) {
  return Axios.get(`${URL_QUERY}`, {
    params: { page: 1, api_key: API_KEY, language: 'en-US', include_adult: true, query: query },
  })
    .then(({ data: { results } }) => results)
    .catch(error => error);
}

export {
  fetchPopularMovies,
  fetchMovieByID,
  fetchCreditsMovie,
  fetchReviewsMovie,
  fetchMoviesByQuery,
  BASE_IMG_URL,
};
