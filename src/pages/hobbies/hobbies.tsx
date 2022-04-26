import * as React from 'react';

import { H1, ExtLink, H2 } from '../components';

export const HobbiesPage: React.FC = () => (
  <main>
    <H1>Hobbies</H1>
    <div>
      <ExtLink href="/notion-widget-countdown-dark.html">countdown-dark</ExtLink>
    </div>
    <div>
      <ExtLink href="/notion-widget-countdown-light.html">countdown-light</ExtLink>
    </div>
    <H2>Tests</H2>
    <div>
      <ExtLink href="/notion-widget-countdown-dark.html">countdown-dark</ExtLink>
    </div>
    <div>
      <ExtLink href="/notion-widget-countdown-light.html">countdown-light</ExtLink>
    </div>
  </main>
);
