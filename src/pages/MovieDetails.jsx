import axios from 'axios';
import { Suspense, useState, useRef, useEffect } from 'react';
import { useLocation, NavLink, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [dataCard, setDataCard] = useState(null);

  useEffect(() => {
    if (movieId) runQuery(movieId);
  }, []);
  // query to film with id=343611 https://api.themoviedb.org/3/movie/343611?api_key=6746b4dbb69b720741ecbdc7655d3557

  const runQuery = queryWord => {
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const apiKey = '6746b4dbb69b720741ecbdc7655d3557';
    const typeQuery = 'movie';
    axios.get(`${typeQuery}/${movieId}?api_key=${apiKey}`).then(res => {
      const dataArr = res.data;
      setDataCard(dataArr.results);
    });
  };

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
