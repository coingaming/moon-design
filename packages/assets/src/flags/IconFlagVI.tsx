import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Virgin Islands, U.S.
const IconFlagVI: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-vi" fontSize={fontSize} {...props}>
    🇻🇮
  </Flag>
);

export default IconFlagVI;
