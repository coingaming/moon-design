import React from 'react';
import Size from '../private/enums/Size';
import LoaderWrapper from './styles/LoaderWrapper';
import type LoaderProps from './private/types/LoaderProps';

const Loader: React.FC<LoaderProps> = ({ color, size = Size.MEDIUM }) => (
  <LoaderWrapper color={color} size={size}>
    <div />
    <div />
    <div />
    <div />
  </LoaderWrapper>
);
export default Loader;
