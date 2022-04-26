import * as React from 'react';

import { HobbiesIds } from '../../states';
import { H1, Link } from '../components';

export const HobbiesPage: React.FC = () => (
  <main>
    <H1>Hobbies</H1>
    <div>
      <Link to={HobbiesIds.countdownDark}>countdown-dark</Link>
    </div>
    <div>
      <Link to={HobbiesIds.countdownLight}>countdown-light</Link>
    </div>
  </main>
);
