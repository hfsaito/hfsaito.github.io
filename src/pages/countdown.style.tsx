import styled, { StyledComponent, StyledComponentProps } from "styled-components";

export type CountdownPageProps = {
  color: 'dark' | 'light';
};

type ContainerProps = {
  color: 'dark' | 'light';
}; 
type ContainerStyledProps = StyledComponentProps<'main', any, ContainerProps, never>; 
export const Container = styled.main<ContainerProps>`
  margin: 0;
  background-color: ${(props: ContainerStyledProps) => props.color === 'dark' ? 'rgba(25, 25, 25, 1)' : 'rgba(255, 255, 255, 0.87)' };
  color: ${(props: ContainerStyledProps) => props.color === 'dark' ? 'rgba(255, 255, 255, 0.87)' : 'rgba(55, 53, 47, 1)' };
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
`;