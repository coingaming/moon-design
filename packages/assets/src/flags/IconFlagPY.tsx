import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Paraguay
const IconFlagPY: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-py" fontSize={fontSize} {...props}>
    🇵🇾
  </Flag>
);

export default IconFlagPY;
