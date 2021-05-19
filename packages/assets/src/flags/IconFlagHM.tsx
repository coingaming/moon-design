import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Heard Island and Mcdonald Islands
const IconFlagHM: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-hm" fontSize={fontSize} {...props}>
    🇭🇲
  </Flag>
);

export default IconFlagHM;
