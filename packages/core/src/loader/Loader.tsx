import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { Size } from './private/Size';
import LoaderWrapper from './styles/LoaderWrapper';

export type LoaderProps = {
  color?: ColorProps;
  size?: Size;
};

const Loader: React.FC<LoaderProps> = ({ color, size = 'medium' }) => (
  <LoaderWrapper color={color} size={size}>
    <div />
    <div />
    <div />
    <div />
  </LoaderWrapper>
);
export default Loader;
