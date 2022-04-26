import * as React from 'react';

import { H1, Link } from '../components';

export const HobbiesPage: React.FC = () => (
  <main>
    <H1>Hobbies</H1>
    <div>
      <Link to="/hobbies/countdown-dark">countdown-dark</Link>
    </div>
    <div>
      <Link to="/hobbies/countdown-light">countdown-light</Link>
    </div>
  </main>
);
