import axios from 'axios';
import { lazy, useEffect, useState } from 'react';
// import getImages from '../service/moviesApi';

const MovieList = lazy(() => import('../components/MovieList/MovieList'));

const Home = () => {
  const [dataQuery, setDataQuery] = useState([]);

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
      });
  };

  return (
    <div>
      <h2>Trending today</h2>
      {dataQuery && <MovieList data={dataQuery} />}
    </div>
  );
};

export default Home;
