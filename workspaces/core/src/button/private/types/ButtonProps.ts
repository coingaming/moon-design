import React from 'react';
import type ButtonAnimations from './ButtonAnimations';
import type ButtonIcons from './ButtonIcons';
import type ButtonVariants from './ButtonVariants';

type ButtonProps<C extends React.ElementType> = {
  variant?: ButtonVariants;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  icon?: ButtonIcons;
  animation?: ButtonAnimations;
  iconSize?: number;
  iconLeft?: JSX.Element | boolean;
  iconRight?: JSX.Element | boolean;
  iconOnly?: JSX.Element | boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  as?: C;
};

export type Props<C extends React.ElementType> = React.PropsWithChildren<
  ButtonProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof ButtonProps<C>>;

type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = {};

export default ButtonProps;
