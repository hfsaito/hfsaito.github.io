import { Link as RouterLink } from 'react-router-dom';
import styled from "styled-components";

export const H1 = styled.h1`${({ theme: { typography }}) => `
  font-size: ${typography.size.xl}px;
  font-family: ${typography.font};
`}`;

export const H2 = styled.h2`${({ theme: { typography }}) => `
  font-size: ${typography.size.lg}px;
  font-family: ${typography.font};
`}`;

export const H3 = styled.h3`${({ theme: { typography }}) => `
  font-size: ${typography.size.md}px;
  font-family: ${typography.font};
`}`;

export const H4 = styled.h4`${({ theme: { typography }}) => `
  font-size: ${typography.size.md}px;
  font-family: ${typography.font};
`}`;

export const H5 = styled.h5`${({ theme: { typography }}) => `
  font-size: ${typography.size.sm}px;
  font-family: ${typography.font};
`}`;

export const H6 = styled.h6`${({ theme: { typography }}) => `
  font-size: ${typography.size.sm}px;
  font-family: ${typography.font};
`}`;

export const P = styled.p`${({ theme: { typography }}) => `
  font-size: ${typography.size.xs}px;
  font-family: ${typography.font};
`}`;

export const Link = styled(RouterLink)`${({ theme: { typography, color }}) => `
  font-size: ${typography.size.xs}px;
  font-family: ${typography.font};
  color: ${color.body};
  text-decoration: none;
`}`;

export const ExtLink = styled.a`${({ theme: { typography, color }}) => `
  font-size: ${typography.size.xs}px;
  font-family: ${typography.font};
  color: ${color.body};
  text-decoration: none;
`}`;