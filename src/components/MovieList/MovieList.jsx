// import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieList = () => {
  //     useEffect(() => {
  //       // HTTP query
  //   }, []);
  return (
    <div>
      MovieList
      {/* <Container> //ul
        {products.map(product => (
          <CardWrapper key={product.id}> //li
            <Link to={`${product.id}`}> 
              <ProductName>{product.name}</ProductName>
            </Link>
          </CardWrapper>
        ))}
      </Container> */}
      <ul>
        <li>
          <Link to="/movies/:movieId">MovieDetails</Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieList;
