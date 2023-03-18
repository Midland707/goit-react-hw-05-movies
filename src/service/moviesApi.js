import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = '32874218-f955783fbc8df841e2f172dbc';
// API Key: 6746b4dbb69b720741ecbdc7655d3557
axios.defaults.params = {
  orientation: 'horizontal',
  //   orientation: 'landscape',
  image_type: 'photo',
  safesearch: 'true',
  per_page: 12,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`?key=${key}&q=${query}&page=${page}`);
  //   console.log('data =', data.hits);
  return data;
};

// home https://api.themoviedb.org/3/trending/movie/day?api_key=6746b4dbb69b720741ecbdc7655d3557

// search query=King+Leon https://api.themoviedb.org/3/search/movie?api_key=6746b4dbb69b720741ecbdc7655d3557&query=King+Leon
// query to film with id=343611 https://api.themoviedb.org/3/movie/343611?api_key=6746b4dbb69b720741ecbdc7655d3557
// image in film_card = https://image.tmdb.org/t/p/original/zk4t5puCiXPvw2dwKBGUt4Hh977.jpg

//cast with id=343611 https://api.themoviedb.org/3/movie/343611/credits?api_key=6746b4dbb69b720741ecbdc7655d3557
//reviews with id=343611 https://api.themoviedb.org/3/movie/343611/reviews?api_key=6746b4dbb69b720741ecbdc7655d3557
