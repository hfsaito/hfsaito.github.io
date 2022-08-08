import * as React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from '@mod-tool/components';
import { HomePage, NotFoundPage } from '@mod-tool/pages';
import { gankListStore, StoreProvider } from '@mod-tool/stores';

export const Root: React.FC = () => (
  <StoreProvider stores={[gankListStore]}>
    <GlobalStyle />
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  </StoreProvider>
);
