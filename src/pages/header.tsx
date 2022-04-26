import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Link } from './components';

export const Header: React.FC = () => (
  <header>
    <Link to="/">hfsaito.github.io</Link>
    <nav>
      <Link to="/hobbies">Hobbies</Link>
    </nav>
    <Outlet />
  </header>
);

