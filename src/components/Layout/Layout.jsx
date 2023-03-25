import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import {
  Wrapper,
  NavMenuList,
  NavMenuItem,
  StyledNavLink,
} from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <NavMenuList>
        <NavMenuItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </NavMenuItem>
        <NavMenuItem>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </NavMenuItem>
      </NavMenuList>
      <Suspense
        fallback={
          <div>
            <Loader />
            Loading page...
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default Layout;
