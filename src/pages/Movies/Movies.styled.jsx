import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const MoviesWrap = styled.div``;
export const MoviesForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
  width: 480px;
`;
export const MoviesFormInput = styled.input`
  width: 400px;
  height: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const MoviesFormBtn = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  &:hover,
  &:focus {
    color: blue;
    background-color: green;
  }
`;

export const MoviesList = styled.ul`
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

export const MoviesItem = styled.li`
  padding-bottom: 10px;
  border-radius: 2px;
  background-color: lightgrey;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const MoviesItemTitle = styled.p`
  text-align: center;
  padding: 10px;

  &:hover {
    color: blue;
  }
`;

export const MoviesItemImg = styled.img`
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
