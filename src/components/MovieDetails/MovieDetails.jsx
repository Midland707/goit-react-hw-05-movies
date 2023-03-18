import { Routes, Route, NavLink } from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import Home from 'pages/Home';

const MovieDetails = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/movies/:movieId/cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MovieDetails;
