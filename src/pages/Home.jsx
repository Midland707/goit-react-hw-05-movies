// import { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails/MovieDetails';
// import getImages from '../service/moviesApi';

const Home = () => {
  //     useEffect(() => {
  //       // HTTP query
  //   }, []);
  return (
    <div>
      Home
      <ul>
        <li>
          <Link to="/movies/:movieId">MovieDetails</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/movies/:movieId" element={<MovieDetails />} />;
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Home;
