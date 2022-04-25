import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CountdownPage, Header, HomePage } from '../pages';

export const Root: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/"  element={<HomePage />} />
      </Route>
      <Route path="/countdown-dark"  element={<CountdownPage color='dark' />} />
      <Route path="/countdown-light"  element={<CountdownPage color='light' />} />
    </Routes>
  </BrowserRouter>
);

