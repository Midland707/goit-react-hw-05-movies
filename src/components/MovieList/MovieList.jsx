import { Link } from 'react-router-dom';

const MovieList = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
