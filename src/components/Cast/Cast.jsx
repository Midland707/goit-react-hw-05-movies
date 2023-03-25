import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [castsCard, setCastsCard] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
      const apiKey = '6746b4dbb69b720741ecbdc7655d3557';
      const typeQuery = 'movie';
      const subType = 'credits';
      axios
        .get(`${typeQuery}/${movieId}/${subType}?api_key=${apiKey}`)
        .then(res => {
          const dataArr = res.data;
          setCastsCard(dataArr.cast);
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  }, [movieId]);

  const imgURL = 'https://image.tmdb.org/t/p/original';
  return (
    <div>
      {castsCard.length ? (
        <ul>
          {castsCard.map(cast => (
            <li key={cast.id}>
              {cast.profile_path && (
                <img
                  src={`${imgURL}${cast.profile_path}`}
                  alt={`${cast.original_name}`}
                />
              )}
              <span>{cast.original_name}</span>
              <span>Character {cast.character}</span>
            </li>
          ))}
        </ul>
      ) : (
        <span>We don't have any cast for this movie</span>
      )}
    </div>
  );
};

export default Cast;
