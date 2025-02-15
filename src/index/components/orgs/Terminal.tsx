import React from "react";
import styled, { keyframes, StyledComponentProps } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: monospace;
  font-size: 12px;
  word-break: break-all;
  white-space: break-spaces;
  display: flex;
  flex-direction: column;
`;

const MenuBar = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: lightgray;
  display: flex;
  justify-content: space-between;
`;

const MenuBarMenu = styled.div`
  display: flex;
`;

const MenuBarButton = styled.div`
  padding: 2px 8px;
  color: gray;
  border: solid thin darkgray;
  cursor: default;
`;

const Frame = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  color: white;
  background-color: black;
  border: solid thick lightgray;
  padding: 4px;
  overflow: hidden;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const WritableArea = styled.div<{lines?: number}>`
  flex-grow: 1;
  max-height: 100%;
  background-color: #212121;
  overflow: hidden;
  overflow-y: scroll;
  line-height: 1;
  width: 100%;
  max-height: ${({lines}) => lines ? `${lines}em` : '100%'};

  a {
    color: inherit;
  }
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

export const Terminal: React.FC = ({children}) => (
  <Container>
    <MenuBar>
      <MenuBarMenu>
        <MenuBarButton>File</MenuBarButton>
        <MenuBarButton>Edit</MenuBarButton>
        <MenuBarButton>Help</MenuBarButton>
      </MenuBarMenu>
      <MenuBarButton>x</MenuBarButton>
    </MenuBar>
    <Frame>
      <WritableArea>
        {children}
        <div>user@hfsaito.github.io:~$ <TerminalCursor /></div>
      </WritableArea>
    </Frame>
  </Container>
);
