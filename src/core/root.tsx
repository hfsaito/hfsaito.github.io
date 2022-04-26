import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { CountdownPage, Header, HomePage, HobbiesPage, NotFoundPage } from '../pages';
import { HobbiesIds, Theme } from '../states';

export const Root: React.FC = () => (
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<HomePage />} />
          <Route path="hobbies" element={<HobbiesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="notion-widget-countdown-dark" element={() => {
          window.location.href = '/notion-widget-countdown-dark.html';
          return <></>;
        }} />
        <Route path={HobbiesIds.countdownLight} element={<CountdownPage color='light' />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider >
);
