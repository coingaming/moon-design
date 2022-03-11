import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { Size } from './private/Size';
import InnerCircle from './styles/InnerCircle';
import OuterCircle from './styles/OuterCircle';

export interface LoaderProps {
  color?: ColorProps;
  size?: Size;
}

const Loader: React.FC<LoaderProps> = ({ color, size = 'xsmall' }) => (
  <OuterCircle size={size}>
    <InnerCircle color={color}></InnerCircle>
  </OuterCircle>
);
export default Loader;
