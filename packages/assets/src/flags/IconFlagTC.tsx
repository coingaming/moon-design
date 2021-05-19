import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Turks and Caicos Islands
const IconFlagTC: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-tc" fontSize={fontSize} {...props}>
    🇹🇨
  </Flag>
);

export default IconFlagTC;
