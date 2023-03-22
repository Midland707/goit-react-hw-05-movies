import axios from 'axios';
import { useState, lazy, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
const MovieList = lazy(() => import('../components/MovieList/MovieList'));

const Movies = () => {
  const [searchWord, setSearchWord] = useState('');
  const [dataSearch, setDataSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { query } = useParams();

  useEffect(() => {
    console.log('query = ', query);
  }, []);

  const onChangeHandel = event => {
    const { value } = event.currentTarget;
    setSearchWord(value);
  };

  const updateQueryString = () => {
    if (searchWord === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: searchWord });
  };

  const runQuery = queryWord => {
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const apiKey = '6746b4dbb69b720741ecbdc7655d3557';
    const typeQuery = 'search';
    const media_type = 'movie';
    axios
      .get(`${typeQuery}/${media_type}?api_key=${apiKey}&query=${queryWord}`)
      .then(res => {
        const dataArr = res.data;
        setDataSearch(dataArr.results);
      });
  };

  const onSubmitForm = eventSubmit => {
    eventSubmit.preventDefault();
    if (searchWord.trim() === '') {
      alert('Ведіть назву фільму');
      return;
    }
    // search query=King+Leon https://api.themoviedb.org/3/search/movie?api_key=6746b4dbb69b720741ecbdc7655d3557&query=King+Leon
    runQuery(searchWord);
    updateQueryString();
    setSearchWord('');
  };

  return (
    <div onSubmit={onSubmitForm}>
      Movies
      <form>
        <input
          type="text"
          name="searchWord"
          autoComplete="off"
          value={searchWord}
          autoFocus
          placeholder="Search movies"
          required
          onChange={onChangeHandel}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList data={dataSearch} />
    </div>
  );
};

export default Movies;
