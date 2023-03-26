import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MovieDetailsWrap = styled.div``;

export const MovieDetailsGoBack = styled(Link)`
  display: block;
  width: 100px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
  color: black;

  &:hover,
  &:focus {
    color: green;
  }
`;

export const MovieCard = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 30px;
`;

export const MovieCardImg = styled.img`
  height: 400px;
  object-fit: contain;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const MovieCardDesc = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieCardDescTitle = styled.h1`
  margin-bottom: 20px;
`;
export const MovieCardDescOverview = styled.h2`
  margin-top: 20px;
  font-size: 30px;
`;
export const MovieCardDescGenres = styled.h3`
  margin-top: 20px;
  font-size: 30px;
`;
export const MovieCardDescText = styled.p`
  font-weight: normal;
  font-size: 20px;
`;

export const MovieCardInfo = styled.div`
  margin-top: 20px;
`;
export const MovieCardInfoTitle = styled.h4`
  margin-bottom: 20px;
  font-size: 30px;
`;
export const MovieCardNavMenu = styled.ul`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;
export const MovieCardNavMenuItem = styled.li`
  width: 100px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
`;

export const MovieCardNavLink = styled(NavLink)`
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
  color: black;
  &.active {
    color: blue;
  }
  &:hover,
  &:focus {
    color: green;
  }
`;
