import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { Size } from './private/Size';
import Container from './styles/Container';
import LoaderRing from './styles/LoaderRing';

export interface LoaderProps {
  color?: ColorProps;
  size?: Size;
}

const Loader: React.FC<LoaderProps> = ({ color, size = 'xsmall' }) => (
  <Container role="progressbar" size={size}>
    {['-0.45s', '-0.3s', '-0.15s', '0s'].map((delay) => (
      <LoaderRing
        key={`loader-${delay}`}
        color={color}
        animationDelay={delay}
      />
    ))}
  </Container>
);

export default Loader;
