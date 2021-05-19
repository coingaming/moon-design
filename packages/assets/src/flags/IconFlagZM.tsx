import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Zambia
const IconFlagZM: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-zm" fontSize={fontSize} {...props}>
    🇿🇲
  </Flag>
);

export default IconFlagZM;
