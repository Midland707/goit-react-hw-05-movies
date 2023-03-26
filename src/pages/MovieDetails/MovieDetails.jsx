import { Suspense, useState, useRef, useEffect } from 'react';
import { useLocation, Outlet, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getMovie } from '../../service/moviesApi';
import {
  MovieDetailsWrap,
  MovieDetailsGoBack,
  MovieCard,
  MovieCardImg,
  MovieCardDesc,
  MovieCardDescTitle,
  MovieCardDescOverview,
  MovieCardDescGenres,
  MovieCardDescText,
  MovieCardInfo,
  MovieCardInfoTitle,
  MovieCardNavMenu,
  MovieCardNavMenuItem,
  MovieCardNavLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [dataCard, setDataCard] = useState(null);

  const imgURL = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    if (movieId) {
      getMovie(movieId)
        .then(res => {
          const dataArr = res.data;
          setDataCard(dataArr);
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  }, [movieId]);

  const getGenres = () => {
    if (dataCard) {
      const arr = [];
      dataCard.genres.forEach(obj => arr.push(obj.name));
      return arr.toString();
    }
  };
  return (
    <MovieDetailsWrap>
      <MovieDetailsGoBack to={backLinkRef.current}>Go back</MovieDetailsGoBack>
      {dataCard && (
        <MovieCard>
          {dataCard.poster_path ? (
            <MovieCardImg src={`${imgURL}${dataCard.poster_path}`} alt="" />
          ) : (
            <MovieCardImg
              src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              alt="no image"
            />
          )}
          <MovieCardDesc>
            <MovieCardDescTitle>
              {dataCard.original_title}
              {` (${dataCard.release_date.slice(0, 4)})`}
            </MovieCardDescTitle>
            <MovieCardDescText>
              User Score : {(dataCard.vote_average * 10).toFixed(0)} %
            </MovieCardDescText>
            <MovieCardDescOverview>
              Overview
              <MovieCardDescText>{dataCard.overview}</MovieCardDescText>
            </MovieCardDescOverview>
            <MovieCardDescGenres>
              Genres
              <MovieCardDescText>{getGenres()}</MovieCardDescText>
            </MovieCardDescGenres>
          </MovieCardDesc>
        </MovieCard>
      )}
      <MovieCardInfo>
        <MovieCardInfoTitle>Aditional information</MovieCardInfoTitle>
        <MovieCardNavMenu>
          <MovieCardNavMenuItem>
            <MovieCardNavLink to={`/movies/${movieId}/cast`}>
              Cast
            </MovieCardNavLink>
          </MovieCardNavMenuItem>
          <MovieCardNavMenuItem>
            <MovieCardNavLink to={`/movies/${movieId}/reviews`}>
              Reviews
            </MovieCardNavLink>
          </MovieCardNavMenuItem>
        </MovieCardNavMenu>
      </MovieCardInfo>
      <Suspense
        fallback={
          <div>
            <Loader />
            Loading subpage...
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MovieDetailsWrap>
  );
};

export default MovieDetails;
