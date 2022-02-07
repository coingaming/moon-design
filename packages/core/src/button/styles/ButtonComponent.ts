import styled from 'styled-components';
import errorAnimation from '../private/buttonAnimations/errorAnimation';
import pulseAnimation from '../private/buttonAnimations/pulseAnimation';
import buttonSizes from '../private/buttonSizes/buttonSizes';
import buttonCommonStyles from '../private/buttonStyles/buttonCommonStyles';
import buttonVariants from '../private/buttonStyles/buttonVariants';
import type { ButtonProps } from '../Button';

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
