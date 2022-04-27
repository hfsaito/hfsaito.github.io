import * as React from 'react';

import { H1, ExtLink } from '../../../components';

export const NotionWidgetsPage: React.FC = () => (
  <>
    <H1>Notion Widgets</H1>
    <div>
      <ExtLink href="/notion-widgets/countdown.html?date=2022-05-19T20:00:00.000-03:00">countdown</ExtLink>
    </div>
  </>
);
