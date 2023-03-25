import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {dataQuery.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
