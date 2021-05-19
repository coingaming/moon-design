import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// French Polynesia
const IconFlagPF: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-pf" fontSize={fontSize} {...props}>
    🇵🇫
  </Flag>
);

export default IconFlagPF;
