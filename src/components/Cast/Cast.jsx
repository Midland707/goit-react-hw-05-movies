import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieInfo } from '../../service/moviesApi';
import {
  MovieCastWrap,
  MovieCastList,
  MovieCastItem,
  MovieCastImg,
  MovieCastTitle,
  MovieCastName,
  MovieCastChar,
  MovieCastEmpty,
} from './Cast.styled';

const Cast = () => {
  const [castsCard, setCastsCard] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getMovieInfo(movieId, 'credits')
        .then(res => {
          setCastsCard(res.data.cast);
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  }, [movieId]);

  const imgURL = 'https://image.tmdb.org/t/p/original';
  return (
    <MovieCastWrap>
      {castsCard.length ? (
        <MovieCastList>
          {castsCard.map(cast => (
            <MovieCastItem key={cast.id}>
              <MovieCastTitle>
                <MovieCastName>{cast.original_name}</MovieCastName>
                <MovieCastChar>Character : {cast.character}</MovieCastChar>
              </MovieCastTitle>
              {cast.profile_path ? (
                <MovieCastImg
                  src={`${imgURL}${cast.profile_path}`}
                  alt={`${cast.original_name}`}
                />
              ) : (
                <MovieCastImg
                  src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                  alt="no image"
                />
              )}
            </MovieCastItem>
          ))}
        </MovieCastList>
      ) : (
        <MovieCastEmpty>We don't have any cast for this movie</MovieCastEmpty>
      )}
    </MovieCastWrap>
  );
};

export default Cast;
