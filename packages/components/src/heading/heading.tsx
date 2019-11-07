import styled from 'styled-components';

import { headingSizes, HeadingSizes } from './sizes';

type HeadingProps = {
  size: HeadingSizes;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  color?: string;
};

const Heading = styled.p<HeadingProps>(({ size, color }) => [
  size && headingSizes[size],
  color && { color },
]);

Heading.defaultProps = {
  color: 'inherit',
};

export { Heading, HeadingProps };
