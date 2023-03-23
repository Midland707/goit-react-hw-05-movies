import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviewsCard, setReviewsCard] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    runQuery();
  }, []);
  // https://api.themoviedb.org/3/movie/272/reviews?api_key=6746b4dbb69b720741ecbdc7655d3557
  const runQuery = () => {
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
        });
    }
  };

  return (
    <div>
      {reviewsCard ? (
        <ul>
          {reviewsCard.map(review => (
            <li key={review.id}>
              <span>Autor{review.author}</span>
              <span>Character {review.content}</span>
            </li>
          ))}
        </ul>
      ) : (
        <span>We don't have any reviews for this movie</span>
      )}
    </div>
  );
};

export default Reviews;
