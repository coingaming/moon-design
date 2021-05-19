import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Aruba
const IconFlagAW: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-aw" fontSize={fontSize} {...props}>
    🇦🇼
  </Flag>
);

export default IconFlagAW;
