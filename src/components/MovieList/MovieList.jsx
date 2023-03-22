import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ data }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {data.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
