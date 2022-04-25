import * as React from 'react';

import { Container, CountdownPageProps } from './countdown.style';

import { DateCountdown } from '../mols';

const DATE = new Date(2022, 4, 19, 20, 0, 0, 0);

export const CountdownPage: React.FC<CountdownPageProps> = props => {
  return (
    <Container color={props.color}>
      <DateCountdown date={DATE} />
    </Container>
  );
};
