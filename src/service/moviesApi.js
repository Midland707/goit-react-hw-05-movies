import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '6746b4dbb69b720741ecbdc7655d3557';

export async function getTrendMovies() {
  return await axios.get(`trending/movie/day?api_key=${apiKey}`);
}

export async function getSeachMovies(queryWord) {
  return await axios.get(`search/movie?api_key=${apiKey}&query=${queryWord}`);
}

export async function getMovie(movieId) {
  return await axios.get(`movie/${movieId}?api_key=${apiKey}`);
}

export async function getMovieInfo(movieId, subType) {
  return await axios.get(`movie/${movieId}/${subType}?api_key=${apiKey}`);
}
