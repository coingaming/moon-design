import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { Size } from './private/Size';
import Container2 from './styles/Container2';
import LoaderRing2 from './styles/LoaderRing2';

export interface LoaderProps {
  color?: ColorProps;
  size?: Size;
}

const Loader2: React.FC<LoaderProps> = ({ color, size = 'xsmall' }) => (
  <LoaderRing2 color={color}></LoaderRing2>
);
export default Loader2;
