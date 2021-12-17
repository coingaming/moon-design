import styled from 'styled-components';
import { ButtonProps } from '../Button';
import buttonSizes from '../private/buttonSizes/buttonSizes';
import buttonCommonStyles from '../private/buttonStyles/buttonCommonStyles';
import buttonVariants from '../private/buttonStyles/buttonVariants';

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
  }) => [
    buttonSizes({ size, icon, iconLeft, iconRight, iconOnly }),
    buttonCommonStyles({ iconSize, disabled }),
    buttonVariants({ variant }),
    fullWidth && {
      width: '100%',
    },
  ]
);

export default ButtonComponent;
