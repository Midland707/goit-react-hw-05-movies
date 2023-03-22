import { Suspense, useRef } from 'react';
import { useLocation, NavLink, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  return (
    <div>
      <ul>
        <li>
          <NavLink to={backLinkRef.current}>Back to Home</NavLink>
          Вона працює !!! -- {movieId} ---
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
