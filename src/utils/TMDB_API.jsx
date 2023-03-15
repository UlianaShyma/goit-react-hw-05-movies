import axios from 'axios';

import defaultPoster from '../images/no_poster_placeholder.png';
const baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '28dcdbd0943bf495601cda9c26c777d2';

const trendingMovie = 'trending/movie/day';
const searchByQuery = 'search/movie';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${baseURL}${trendingMovie}?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(`${baseURL}${searchByQuery}`, {
    params: {
      api_key: API_KEY,
      query,
      page: 1,
      include_adult: false,
    },
  });
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`${baseURL}movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(`${baseURL}movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`${baseURL}movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
      page: 1,
    },
  });
  return data;
};

export const posterMovie = poster_path => {
  const posterUrl = 'https://image.tmdb.org/t/p/w300/';
  const defaultImg = defaultPoster;
  if (!poster_path) {
    return defaultImg;
  }
  return `${posterUrl}${poster_path}`;
};

export const profilePath = profile_path => {
  const profileImg = `https://image.tmdb.org/t/p/w200/${profile_path}`;
  return profileImg;
};
