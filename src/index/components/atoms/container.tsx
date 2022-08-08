import styled from "styled-components";

import { handleStyleCommon, Style, StyleCommon } from "@constants";

export const Container = styled.div<StyleCommon>`
  margin: 0 auto;
  width: 100%;

  @media ${Style.device.laptopL} {
    max-width: ${Style.breakpoint.laptopL}px;
  }
  
  ${handleStyleCommon}
`;
