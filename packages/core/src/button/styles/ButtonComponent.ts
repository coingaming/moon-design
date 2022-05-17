import styled from 'styled-components';
import errorAnimation from '../styles/buttonAnimations/errorAnimation';
import pulseAnimation from '../styles/buttonAnimations/pulseAnimation';
import buttonSizes from '../styles/buttonSizes/buttonSizes';
import buttonCommonStyles from '../styles/buttonStyles/buttonCommonStyles';
import buttonVariants from '../styles/buttonStyles/buttonVariants';
import type ButtonProps from '../private/types/ButtonProps';

const ButtonComponent = styled.button<ButtonProps>(
  ({
    variant,
    size,
    icon,
    iconSize,
    iconLeft,
    iconRight,
    iconOnly,
    fullWidth,
    disabled,
    animation,
  }) => [
    buttonSizes({ size, icon, iconLeft, iconRight, iconOnly }),
    buttonCommonStyles({ iconSize, disabled }),
    buttonVariants({ variant }),
    animation === 'pulse' && pulseAnimation,
    animation === 'error' && errorAnimation,
    fullWidth &&
      !iconOnly && {
        width: '100%',
      },
  ]
);

export default ButtonComponent;
