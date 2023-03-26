import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSeachMovies } from '../../service/moviesApi';
import {
  MoviesWrap,
  MoviesForm,
  MoviesFormInput,
  MoviesFormBtn,
  MoviesList,
  MoviesItem,
  MoviesItemTitle,
  MoviesItemImg,
  StyledLink,
} from './Movies.styled';

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
    getSeachMovies(queryWord)
      .then(res => {
        setDataSearch(res.data.results);
      })
      .catch(error => {
        console.error(error.message);
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

  const imgURL = 'https://image.tmdb.org/t/p/original';
  return (
    <MoviesWrap>
      <MoviesForm onSubmit={onSubmitForm}>
        <MoviesFormInput
          type="text"
          name="searchWord"
          autoComplete="off"
          value={searchWord}
          autoFocus
          placeholder="Search movies"
          required
          onChange={onChangeHandel}
        />
        <MoviesFormBtn type="submit">Search</MoviesFormBtn>
      </MoviesForm>
      <MoviesList>
        {dataSearch.map(movie => (
          <MoviesItem key={movie.id}>
            <MoviesItemTitle>
              {movie.original_title}
              {` (${movie.release_date.slice(0, 4)})`}
            </MoviesItemTitle>
            <StyledLink to={`${movie.id}`} state={{ from: location }}>
              {movie.poster_path ? (
                <MoviesItemImg
                  src={`${imgURL}${movie.poster_path}`}
                  alt={`${movie.original_title}`}
                />
              ) : (
                <MoviesItemImg
                  src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                  alt="no image"
                />
              )}
            </StyledLink>
          </MoviesItem>
        ))}
      </MoviesList>
    </MoviesWrap>
  );
};

export default Movies;
