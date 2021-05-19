import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Portugal
const IconFlagPT: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-pt" fontSize={fontSize} {...props}>
    🇵🇹
  </Flag>
);

export default IconFlagPT;
