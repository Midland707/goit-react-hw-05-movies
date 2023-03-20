// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { lazy } from 'react';

// import MovieList from 'components/MovieList/MovieList';
// import getImages from '../service/moviesApi';

const MovieList = lazy(() => import('../components/MovieList/MovieList'));

const Home = () => {
  //     useEffect(() => {
  //       // HTTP query
  //   }, []);
  return (
    <div>
      Home
      {/* <MovieList /> */}
    </div>
  );
};

export default Home;
