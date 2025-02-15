import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, NotFoundPage } from '@/index/pages';

export const Root: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
