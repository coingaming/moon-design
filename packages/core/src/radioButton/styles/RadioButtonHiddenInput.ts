import { hideVisually } from '@heathmont/moon-utils';
import {lighten} from "polished";
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
  '&:checked + span': {
    '&:hover': {
      backgroundColor: lighten(0.43, theme.colorNew.piccolo)
    },
    '&::before': {
      transform: 'translate(-50%, -50%) scale(1)',
    },
    '&:after': {
      boxShadow: `inset 0 0 0 0.1rem ${theme.colorNew.piccolo}`,
    }
  },
  '&:disabled ~ *': {
    opacity: theme.newTokens.opacity,
    cursor: 'not-allowed',
  },
}));

export default RadioButtonHiddenInput;
