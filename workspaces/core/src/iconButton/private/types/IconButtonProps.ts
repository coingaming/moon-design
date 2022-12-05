import React from 'react';
import type ButtonAnimations from '../../../button/private/types/ButtonAnimations';
import type ButtonVariants from '../../../button/private/types/ButtonVariants';

export type IconButtonSettingsProps = {
  icon?: JSX.Element;
  children?: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  animation?: ButtonAnimations;
  disabled?: boolean;
  variant?: ButtonVariants;
};

type IconButtonProps<C extends React.ElementType> = {
  as?: C;
  customClassName?: string;
} & IconButtonSettingsProps;

type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = {};

export default IconButtonProps;
