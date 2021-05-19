import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Saint Kitts and Nevis
const IconFlagKN: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-kn" fontSize={fontSize} {...props}>
    🇰🇳
  </Flag>
);

export default IconFlagKN;
