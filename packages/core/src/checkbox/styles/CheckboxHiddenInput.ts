import styled from 'styled-components';
import { rem, hideVisually } from '@heathmont/moon-utils';

// Hide checkbox visually but remain accessible to screen readers.
const CheckboxHiddenInput = styled.input.attrs({ type: 'checkbox' })(
  ({ theme }) => ({
    ...hideVisually(),
    '&:checked + figure::after': {
      backgroundColor: theme.color.piccolo[100],
      backgroundSize: rem(10),
    },
    '&:hover:enabled, &:focus:enabled': {
      /* Show the Pseudo Checkbox Circle */
      '& + figure::before': {
        opacity: 0.2,
        transform: 'scale(2)',
        backgroundColor: theme.color.trunks[100],
        transitionProperty: 'background-color, transform, opacity',
        willChange: 'transform, opacity',
      },
      '&:checked + figure::before': {
        opacity: 0.1,
        backgroundColor: theme.color.piccolo[100] /* [1] */,
      },
      /* Adjust the Pseudo Checkbox */
      '&:not(:checked) + figure::after': {
        borderColor: theme.color.trunks[100],
      },
    },
    '&:disabled ~ *': {
      opacity: '0.5',
      cursor: 'not-allowed',
    },
  })
);

export default CheckboxHiddenInput;
