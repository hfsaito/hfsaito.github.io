import * as React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Container, Link } from '../../components';

import { HeaderElement, Main } from './header.style';

export const Header: React.FC = () => {

  const location = useLocation();

  return (
    <>
      <HeaderElement>
        <Container>
          <Link to="/" color='primary' size='sm' muted={location.pathname === "/"}>
            Hiroshi Saito
          </Link>
          <nav>
            <Link to="/about" color='primary' muted={location.pathname === '/about'}>About</Link>
            <Link to="/hobbies" color='primary' muted={location.pathname === '/hobbies'}>Hobbies</Link>
          </nav>
        </Container>
      </HeaderElement>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
}
