import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  HomeWrap,
  HomeTitle,
  HomeMoviesList,
  HomeMoviesItem,
  HomeMoviesItemTitle,
  HomeMoviesItemImg,
  StyledLink,
} from './Home.styled';
// import getImages from '../service/moviesApi';

const Home = () => {
  const [dataQuery, setDataQuery] = useState([]);
  const location = useLocation();

  useEffect(() => {
    runQuery();
  }, []);

  const runQuery = () => {
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    const apiKey = '6746b4dbb69b720741ecbdc7655d3557';
    const typeQuery = 'trending';
    const media_type = 'movie';
    const time_window = 'day';
    axios
      .get(`${typeQuery}/${media_type}/${time_window}?api_key=${apiKey}`)
      .then(res => {
        const dataArr = res.data;
        setDataQuery(dataArr.results);
      })
      .catch(error => {
        console.error(error.message);
      });
  };

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
