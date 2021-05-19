import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Solomon Islands
const IconFlagSB: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-sb" fontSize={fontSize} {...props}>
    🇸🇧
  </Flag>
);

export default IconFlagSB;
