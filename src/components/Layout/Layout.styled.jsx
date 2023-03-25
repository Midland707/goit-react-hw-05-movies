import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding: 24px;
  background-color: #c6eec6;
`;

export const NavMenuList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 10px;
`;

export const NavMenuItem = styled.li`
  cursor: pointer;
  padding: 10px;
  border: solid 1px;
  border-radius: 10px;
  background-color: lightgrey;
`;

export const StyledNavLink = styled(NavLink)`
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
