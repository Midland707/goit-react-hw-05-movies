const { useParams } = require('react-router-dom');
const Cast = () => {
  const { movieId } = useParams();
  return <div>Cast {movieId}</div>;
};

export default Cast;
