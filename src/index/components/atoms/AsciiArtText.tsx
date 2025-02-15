import figlet from 'figlet';
import React from 'react';
import styled from 'styled-components';

import { useOnce } from '@/index/hooks';

const PreFormatted = styled.pre`
  white-space: break-spaces;
`;

interface AsciiArtTextProps {
  text: string;
  children?: null;
}

export const AsciiArtText: React.FC<AsciiArtTextProps> = ({text}) => {
  const [asciiArtText, setAsciiArtText] = React.useState('');
  useOnce(() => {
    figlet(text, (error, result) => {
      if (error) {
        return console.error(error);
      }
      setAsciiArtText(result);
    });
  });
  return <PreFormatted dangerouslySetInnerHTML={{ __html: asciiArtText }} />
};
