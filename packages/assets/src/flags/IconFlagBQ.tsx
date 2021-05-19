import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Bonaire, Sint Eustatius and Saba
const IconFlagBQ: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-bq" fontSize={fontSize} {...props}>
    🇧🇶
  </Flag>
);

export default IconFlagBQ;
