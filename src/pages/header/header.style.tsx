import styled from "styled-components";

import { Style } from "../../constants";

export const HeaderElement = styled.header`
  background: ${Style.color.primary.background};
  height: ${Style.space.xl * 2.5}px;
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Main = styled.main`
  background: ${Style.color.body.background};
  overflow: auto;
  min-height: calc(100% - ${Style.space.xl * 2.5}px);
`;