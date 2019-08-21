/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

import { headingSizes, HeadingSizes } from './sizes';

jsx;

type HeadingProps = {
  size: HeadingSizes;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  color?: string;
};

const Heading: React.FC<HeadingProps> = styled('p', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'as',
})(({ size, color }) => [size && headingSizes[size], color && { color }]);

Heading.defaultProps = {
  color: 'inherit',
};

export { Heading, HeadingProps };
