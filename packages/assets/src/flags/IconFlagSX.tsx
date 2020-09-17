import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Sint Maarten (Dutch Part)
const IconFlagSX: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line jsx-a11y/accessible-emoji
  <Flag role="img" aria-label="flag-sx" fontSize={fontSize} {...props}>
    🇸🇽
  </Flag>
);

export default IconFlagSX;
