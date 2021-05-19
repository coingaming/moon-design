import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Ethiopia
const IconFlagET: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-et" fontSize={fontSize} {...props}>
    🇪🇹
  </Flag>
);

export default IconFlagET;
