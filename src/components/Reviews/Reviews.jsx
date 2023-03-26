import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieInfo } from '../../service/moviesApi';
import {
  MoviesReviewsWrap,
  MovieReviewsList,
  MovieReviewsItem,
  MovieReviewAutor,
  MovieReviewReview,
  MovieReviewEmpty,
} from './Reviews.styled';

const Reviews = () => {
  const [reviewsCard, setReviewsCard] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getMovieInfo(movieId, 'reviews')
        .then(res => {
          const dataArr = res.data;
          setReviewsCard(dataArr.results);
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  }, [movieId]);

  return (
    <MoviesReviewsWrap>
      {reviewsCard.length ? (
        <MovieReviewsList>
          {reviewsCard.map(review => (
            <MovieReviewsItem key={review.id}>
              <MovieReviewAutor>Autor : {review.author}</MovieReviewAutor>
              <MovieReviewReview>{review.content}</MovieReviewReview>
            </MovieReviewsItem>
          ))}
        </MovieReviewsList>
      ) : (
        <MovieReviewEmpty>
          We don't have any reviews for this movie
        </MovieReviewEmpty>
      )}
    </MoviesReviewsWrap>
  );
};

export default Reviews;
