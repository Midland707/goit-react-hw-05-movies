// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import getImages from '../service/moviesApi';

const Home = () => {
  //     useEffect(() => {
  //       // HTTP query
  //   }, []);
  return (
    <div>
      Home
      <ul>
        <li>
          <Link to="/movies/:movieId">MovieDetails</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
