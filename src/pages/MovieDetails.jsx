import axios from 'axios';
import { Suspense, useState, useRef, useEffect } from 'react';
import { useLocation, NavLink, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [dataCard, setDataCard] = useState(null);

  const imgURL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    if (movieId) {
      axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
      const apiKey = '6746b4dbb69b720741ecbdc7655d3557';
      const typeQuery = 'movie';
      axios.get(`${typeQuery}/${movieId}?api_key=${apiKey}`).then(res => {
        const dataArr = res.data;
        setDataCard(dataArr);
      });
    }
  }, [movieId]);

  const getGenres = () => {
    if (dataCard) {
      const a = [];
      dataCard.genres.forEach(function (obj) {
        a.push(obj.name);
      });
      return a.toString();
    }
  };
  return (
    <div>
      <NavLink to={backLinkRef.current}>Back to Home</NavLink>
      {dataCard && (
        <div>
          <img src={`${imgURL}${dataCard.poster_path}`} alt="" />
          <span>{dataCard.original_title}</span>
          <span>User Score : {dataCard.popularity}</span>
          <span>Overview {dataCard.overview}</span>
          <span>Genres {getGenres()}</span>
        </div>
      )}
      <span>Aditional information</span>
      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
