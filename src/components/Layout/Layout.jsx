import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
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
    </div>
  );
};

export default Layout;
