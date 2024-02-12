import React from 'react';
import type ButtonAnimations from '../../../button/private/types/ButtonAnimations';
import type ButtonSizes from '../../../button/private/types/ButtonSizes';
import type ButtonVariants from '../../../button/private/types/ButtonVariants';

export type IconButtonSettingsProps = {
  icon?: JSX.Element;
  children?: React.ReactNode;
  size?: ButtonSizes;
  animation?: ButtonAnimations;
  disabled?: boolean;
  variant?: ButtonVariants;
};

type IconButtonProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
} & IconButtonSettingsProps;

type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = {};

export default IconButtonProps;
