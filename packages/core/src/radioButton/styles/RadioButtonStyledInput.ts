import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const BORDER_WIDTH = 1;

const RadioButtonStyledInput = styled.figure(({ theme }) => ({
  width: rem(16),
  height: rem(16),
  display: 'inline-block',
  boxSizing: 'border-box',
  border: `${rem(BORDER_WIDTH)} solid ${theme.color.piccolo[100]}`,
  borderRadius: '50%',
  position: 'relative',
  zIndex: 2,
  cursor: 'pointer',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    borderRadius: '50%',
    transitionTimingFunction: 'ease',
    transitionDuration: `${theme.transitionDuration.default}s`,
  },
  /* Pseudo RadioButton Circle */
  '&::before': {
    width: rem(16),
    height: rem(16),
    top: rem(-BORDER_WIDTH),
    left: rem(-BORDER_WIDTH),
    opacity: 0,
    transform: 'none',
    transitionProperty: 'background-color, transform, opacity',
    willChange: 'transform, opacity',
    zIndex: 1,
  },
  /* Psuedo RadioButton */
  '&::after': {
    width: rem(8),
    height: rem(8),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    transitionProperty: 'background-color, opacity',
    zIndex: 3,
  },
}));

export default RadioButtonStyledInput;
