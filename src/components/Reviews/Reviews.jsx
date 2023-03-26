import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
      axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
      const apiKey = '6746b4dbb69b720741ecbdc7655d3557';
      const typeQuery = 'movie';
      const subType = 'reviews';
      axios
        .get(`${typeQuery}/${movieId}/${subType}?api_key=${apiKey}`)
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
