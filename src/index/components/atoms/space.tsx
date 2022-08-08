import styled from "styled-components";

import { Style, StyleType } from "@constants";

type SpaceProps = {
  size?: keyof StyleType['space']
}

export const VSpace = styled.div<SpaceProps>`
  height: ${props => Style.space[props.size ?? 'xs']}px;
`;

export const HSpace = styled.div<SpaceProps>`
  display: inline-block;
  width: ${props => Style.space[props.size ?? 'xs']}px;
`;