import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeWrap = styled.div``;

export const HomeTitle = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

export const HomeMoviesList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const HomeMoviesItem = styled.li`
  padding-bottom: 10px;
  border-radius: 2px;
  background-color: lightgrey;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const HomeMoviesItemTitle = styled.p`
  text-align: center;
  padding: 10px;

  &:hover {
    color: blue;
  }
`;

export const HomeMoviesItemImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: contain;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
