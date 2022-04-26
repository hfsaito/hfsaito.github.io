import * as React from 'react';

import { DateCountdown } from './mols';

import { Container, CountdownPageProps } from './countdown.style';

const DATE = new Date(2022, 4, 19, 20, 0, 0, 0);

export const CountdownPage: React.FC<CountdownPageProps> = props => {
  return (
    <Container color={props.color}>
      <DateCountdown date={DATE} />
    </Container>
  );
};
