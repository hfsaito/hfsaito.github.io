import * as React from 'react';

import { H1, ExtLink } from '../../components';

export const NotionWidgetsPage: React.FC = () => (
  <main>
    <H1>Notion Widgets</H1>
    <div>
      <ExtLink href="/notion-widgets/countdown-dark.html">countdown-dark</ExtLink>
    </div>
    <div>
      <ExtLink href="/notion-widgets/countdown-light.html">countdown-light</ExtLink>
    </div>
  </main>
);
