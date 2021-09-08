import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';

import LoaderRing from './styles/LoaderRing';
import Container from './styles/Container';

export type LoaderProps = {
  color?: ColorProps;
};

const Loader: React.FC<LoaderProps> = ({ color }) => (
  <Container role="progressbar">
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
