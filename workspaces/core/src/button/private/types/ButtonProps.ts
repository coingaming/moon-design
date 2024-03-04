import React from 'react';
import type ButtonSettingsProps from './ButtonSettingsProps';

type ButtonProps<C extends React.ElementType> = {
  as?: C;
  fullWidth?: boolean;
  className?: string;
} & ButtonSettingsProps;

type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = {};

export default ButtonProps;
