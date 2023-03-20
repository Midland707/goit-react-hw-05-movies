import { useState, lazy } from 'react';
// import MovieList from 'components/MovieList/MovieList';
const MovieList = lazy(() => import('../components/MovieList/MovieList'));

const Movies = () => {
  const [searchWord, setSearchWord] = useState('');

  const onChangeHandel = event => {
    const { value } = event.currentTarget;
    setSearchWord(value);
  };

  const onSubmitForm = eventSubmit => {
    eventSubmit.preventDefault();
    if (searchWord.trim() === '') {
      alert('Ведіть назву фільму');
      return;
    }
    // onSubmit(searchWord);
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
      {/* <MovieList /> */}
    </div>
  );
};

export default Movies;
