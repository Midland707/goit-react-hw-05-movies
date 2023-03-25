import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding: 24px;
`;

export const NavMenuList = styled.ul`
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
`;
