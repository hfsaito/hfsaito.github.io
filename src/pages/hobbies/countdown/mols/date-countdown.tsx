import * as React from 'react';

import {
  DateCountdownProps,
  Container,
  Unit,
  Number,
  Label
} from './date-countdown.style';

export { DateCountdownProps } from './date-countdown.style';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export const DateCountdown: React.FC<DateCountdownProps> = props => {
  const [now, setNow] = React.useState(Date.now());
  const dateTime = props.date.getTime();

  const days = Math.floor((dateTime - now) / DAY);
  const hours = Math.floor(((dateTime - now) % DAY) / HOUR);
  const minutes = Math.floor(((dateTime - now) % HOUR) / MINUTE);
  const seconds = Math.floor(((dateTime - now) % MINUTE) / SECOND);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container>
      <Unit>
        <Number>{days}</Number>
        <Label>days</Label>
      </Unit>
      <Unit>
        <Number>{hours}</Number>
        <Label>hours</Label>
      </Unit>
      <Unit>
        <Number>{minutes}</Number>
        <Label>minutes</Label>
      </Unit>
      <Unit>
        <Number>{seconds}</Number>
        <Label>seconds</Label>
      </Unit>
    </Container>
  );
};
