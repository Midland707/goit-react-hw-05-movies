import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchWord, setSearchWord] = useState('');
  const [dataSearch, setDataSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const URLquery = searchParams.get('query');

  useEffect(() => {
    if (URLquery) runQuery(URLquery);
  }, [URLquery]);

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
      <ul>
        {dataSearch.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
