import * as React from 'react';

import { H1, Link } from '../components';

export const HobbiesPage: React.FC = () => (
  <main>
    <H1>Hobbies</H1>
    <div>
      <Link to="notion-widgets">Notion Widgets</Link>
    </div>
  </main>
);
