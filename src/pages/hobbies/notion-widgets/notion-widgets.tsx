import * as React from 'react';

import { H1, ExtLink } from '../../../components';

export const NotionWidgetsPage: React.FC = () => (
  <>
    <H1>Notion Widgets</H1>
    <div>
      <ExtLink href="/notion-widgets/countdown-1.html">countdown-1</ExtLink>
    </div>
    <div>
      <ExtLink href="/notion-widgets/countdown-2.html">countdown-2</ExtLink>
    </div>
  </>
);
