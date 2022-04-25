import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Header: React.FC = () => (
  <header>
    <Link to="/">hfsaito.github.io</Link>
    <nav>
      <Link to="/countdown-dark">countdown-dark</Link>
      <Link to="/countdown-light">countdown-light</Link>
    </nav>
    <Outlet />
  </header>
);

