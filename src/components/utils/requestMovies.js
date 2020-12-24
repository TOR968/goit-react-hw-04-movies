import KEY from './key';
import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';

export const getDailyTrends = () => {
  return axios.get(`${URL}trending/all/day?api_key=${KEY}`);
};

export const getMoviesList = query => {
  return axios.get(
    `${URL}search/movie?query=${query}&api_key=${KEY}&language=en-US&page=1&include_adult=false`,
  );
};

export const getMovieInfo = movieId => {
  return axios.get(`${URL}movie/${movieId}?api_key=${KEY}&language=en-US`);
};

export const getMovieCast = movieId => {
  return axios.get(`${URL}movie/${movieId}/credits?api_key=${KEY}`);
};

export const getMovieReviews = movieId => {
  return axios.get(
    `${URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
};

export const posterUrl = 'https://image.tmdb.org/t/p/w500';
export const profileUrl = 'http://image.tmdb.org/t/p/w185';
