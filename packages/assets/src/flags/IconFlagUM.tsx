import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// United States Minor Outlying Islands
const IconFlagUM: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line jsx-a11y/accessible-emoji
  <Flag role="img" aria-label="flag-um" fontSize={fontSize} {...props}>
    🇺🇲
  </Flag>
);

export default IconFlagUM;
