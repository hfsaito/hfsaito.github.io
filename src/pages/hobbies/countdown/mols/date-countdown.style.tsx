import styled from "styled-components";

export type DateCountdownProps = {
  date: Date;
};

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-transform: uppercase;
  font-size: .7em;
  letter-spacing: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  max-width: 500px;
`;

export const Unit = styled.div`
  padding: 20px 10px;
`;

export const Number = styled.p`
  font-weight: bold;
  font-size: 3em;
  margin: 1em 0;
  text-align: center;
`;

export const Label = styled.p`
  margin: 1em 0;
`;