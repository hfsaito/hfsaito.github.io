import * as React from 'react';

import { ExtLink, H1, Link } from '../../components';

export const HobbiesPage: React.FC = () => (
  <>
    <H1>Hobbies</H1>
    <div>
      <Link to="notion-widgets">Notion Widgets</Link>
    </div>
    <div>
      <ExtLink href="/mod-tool">Twitch Mod tool</ExtLink>
    </div>
  </>
);
