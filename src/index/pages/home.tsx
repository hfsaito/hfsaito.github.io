import * as React from 'react';

import { AsciiArtText, Terminal } from '@/index/components';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  overflow: hidden;
`;

const ResponsiveSquare = styled.div`
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 600px;
`;

export const HomePage: React.FC = () => (
  <Container>
    <ResponsiveSquare>
      <Terminal>
        <AsciiArtText text={"Home\npage!"} />
        <br />
        <br />
        <div>Author:      Hiroshi Farias Saito</div>
        <div>Profession:  Software engineer</div>
        <br />
        <div>Experiences:</div>
        <div>  at MediaLab</div>
        <div>    since 06/2022</div>
        <div>  at Amazon Web Services</div>
        <div>    10/2020 - 04/2022</div>
        <div>  at Taqtile</div>
        <div>    03/2019 - 08/2020</div>
        <div>  <a href="https://www.linkedin.com/in/hfsaito/">see more</a></div>
        <br />
        <br />
        <div>user@hfsaito.github.io:~$ nav --help</div>
        <div>  Usage: nav [options]</div>
        <div>         nav [arguments]</div>
        <br />
        <div>  Options:</div>
        <div>    -h, --help        print command instructions</div>
        <br />
        <div>  Arguments:</div>
        <div>    home              go to home page</div>
        <br />
        <br />
      </Terminal>
    </ResponsiveSquare>
  </Container>
);
