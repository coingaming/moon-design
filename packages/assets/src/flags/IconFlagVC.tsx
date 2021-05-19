import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Saint Vincent and The Grenadines
const IconFlagVC: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-vc" fontSize={fontSize} {...props}>
    🇻🇨
  </Flag>
);

export default IconFlagVC;
