import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Back to Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies/:movieId/cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
