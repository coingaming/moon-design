import React from 'react';
import type ButtonAnimations from './ButtonAnimations';
import type ButtonIcons from './ButtonIcons';
import type ButtonVariants from './ButtonVariants';

export type ButtonSettingsProps = {
  icon?: ButtonIcons;
  children?: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  iconLeft?: JSX.Element | boolean;
  iconRight?: JSX.Element | boolean;
  iconOnly?: JSX.Element | boolean;
  animation?: ButtonAnimations;
  disabled?: boolean;
  variant?: ButtonVariants;
};

type ButtonProps<C extends React.ElementType> = {
  as?: C;
  fullWidth?: boolean;
  customClassName?: string;
} & ButtonSettingsProps;

type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = {};

export default ButtonProps;
