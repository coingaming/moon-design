import { hideVisually } from '@heathmont/moon-utils';
import styled from 'styled-components';

const RadioButtonHiddenInput = styled.input(({ theme }) => ({
  ...hideVisually(),
  '&:hover:enabled, &:focus:enabled': {
    /* Show the Pseudo RadioButton Circle */
    '& + figure::before': {
      opacity: 0.2,
      transform: 'scale(2)',
      backgroundColor: theme.colorNew.trunks,
    },
    '&:checked + figure::before': {
      opacity: 0,
      transform: 'scale(0)',
    },
  },
  /* Add the "check" to the Pseudo Checkbox */
  '&:checked + figure::after': {
    backgroundColor: theme.colorNew.piccolo,
  },
  '&:disabled ~ *': {
    opacity: 0.1,
    cursor: 'not-allowed',
  },
}));

export default RadioButtonHiddenInput;
