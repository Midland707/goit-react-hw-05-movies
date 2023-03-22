// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

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
          <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <MovieList />
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Home;
