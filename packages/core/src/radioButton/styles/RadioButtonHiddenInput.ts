import styled from 'styled-components';
import { rem, hideVisually } from '@heathmont/moon-utils';

const RadioButtonHiddenInput = styled.input.attrs({ type: 'radio' })(
  ({ theme }) => ({
    ...hideVisually(),
    '&:hover:enabled, &:focus:enabled': {
      /* Show the Pseudo RadioButton Circle */
      '& + figure::before': {
        opacity: 0.2,
        transform: 'scale(2)',
        backgroundColor: theme.color.trunks[100],
      },
      '&:checked + figure::before': {
        opacity: 0,
        transform: 'scale(0)',
      },
    },
    /* Add the "check" to the Pseudo Checkbox */
    '&:checked + figure::after': {
      backgroundColor: theme.color.piccolo[100],
    },
    '&:disabled ~ *': {
      opacity: 0.1,
      cursor: 'not-allowed',
    },
  })
);

export default RadioButtonHiddenInput;
