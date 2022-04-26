import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { NotionWidgetsPage, Header, HomePage, HobbiesPage, NotFoundPage } from '../pages';
import { Theme } from '../states';

export const Root: React.FC = () => (
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<HomePage />} />
          <Route path="hobbies" element={<HobbiesPage />} />
          <Route path="hobbies/notion-widgets" element={<NotionWidgetsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider >
);
