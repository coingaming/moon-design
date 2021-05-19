import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Saint Helena, Ascension and Tristan Da Cunha
const IconFlagSH: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-sh" fontSize={fontSize} {...props}>
    🇸🇭
  </Flag>
);

export default IconFlagSH;
