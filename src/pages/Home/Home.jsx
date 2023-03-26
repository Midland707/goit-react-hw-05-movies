import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendMovies } from '../../service/moviesApi';
import {
  HomeWrap,
  HomeTitle,
  HomeMoviesList,
  HomeMoviesItem,
  HomeMoviesItemTitle,
  HomeMoviesItemImg,
  StyledLink,
} from './Home.styled';

const Home = () => {
  const [dataQuery, setDataQuery] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendMovies()
      .then(res => {
        setDataQuery(res.data.results);
      })
      .catch(error => {
        console.error(error.message);
      });
  }, []);

  const imgURL = 'https://image.tmdb.org/t/p/original';
  return (
    <HomeWrap>
      <HomeTitle>Trending today</HomeTitle>
      <HomeMoviesList>
        {dataQuery.map(movie => (
          <HomeMoviesItem key={movie.id}>
            <StyledLink to={`movies/${movie.id}`} state={{ from: location }}>
              <HomeMoviesItemTitle>
                {movie.original_title}
                {` (${movie.release_date.slice(0, 4)})`}
              </HomeMoviesItemTitle>
              {movie.poster_path ? (
                <HomeMoviesItemImg
                  src={`${imgURL}${movie.poster_path}`}
                  alt={`${movie.original_title}`}
                />
              ) : (
                <HomeMoviesItemImg
                  src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                  alt="no image"
                />
              )}
            </StyledLink>
          </HomeMoviesItem>
        ))}
      </HomeMoviesList>
    </HomeWrap>
  );
};

export default Home;
