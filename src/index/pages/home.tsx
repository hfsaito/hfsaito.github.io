import * as React from 'react';

import { AsciiArtText } from '@/index/components';
import styled, { keyframes } from 'styled-components';

const Position = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const ResponsiveSquare = styled.div`
  max-width: 100%;
  width: 800px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResponsiveRatio4by3 = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 75%;
`;

const Ab = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  color: white;
  background-color: black;
  font-family: monospace;
  border: solid thick lightgray;
  padding: 4px;
  overflow: hidden;
  `;

const WritableArea = styled.div`
  overflow: hidden;
  max-height: 100%;
  background-color: #212121;
  word-break: break-all;
  white-space: break-spaces;
  overflow-y: scroll;
  font-size: 12px;
  line-height: 1;
  height: 32em;
`

const blink = keyframes`
  from, to {
    background-color: transparent;
  }
  50% {
    background-color: white;
  }
`

const TerminalCursor = styled.div`
  width: 1ch;
  height: 1em;
  animation: 1s ${blink} step-end infinite;
  display: inline-block;
  vertical-align: bottom;
`;

const Link = styled.a`
  color: inherit;
`;

export const HomePage: React.FC = () => (
  <>
    <Position>
      <ResponsiveSquare>
        <Ab>
          <WritableArea>
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
            <div>  <Link href="https://www.linkedin.com/in/hfsaito/">see more</Link></div>
            <br />
            <br />
            <div>user@hfsaito.github.io:~$ nav --help</div>
            <div>Usage: nav [options]</div>
            <div>       nav [arguments]</div>
            <br />
            <div>Options:</div>
            <div>  -h, --help        print command instructions</div>
            <br />
            <div>Arguments:</div>
            <div>  home              go to home page</div>
            <br />
            <br />
            <div>user@hfsaito.github.io:~$ <TerminalCursor /></div>
          </WritableArea>
        </Ab>
      </ResponsiveSquare>
    </Position>
  </>
);
