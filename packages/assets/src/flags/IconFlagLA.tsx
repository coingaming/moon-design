import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Lao People's Democratic Republic
const IconFlagLA: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-la" fontSize={fontSize} {...props}>
    🇱🇦
  </Flag>
);

export default IconFlagLA;
