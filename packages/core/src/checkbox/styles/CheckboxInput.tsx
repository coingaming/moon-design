import React from 'react';
import { inlineSvg, rem } from '@heathmont/moon-utils';
import hideVisually from 'polished/lib/mixins/hideVisually';
import styled from 'styled-components';
import { CheckboxIcon } from '../private/icon';

/**
 * Checkbox Input
 *
 * Hides the default input and handles interaction styles of the custom pseudo
 * checkbox on CheckboxCaption.
 */
const CheckboxInput = styled.input.attrs({ type: 'checkbox' })(({ theme }) => ({
  ...hideVisually(),
  '& + span': {
    cursor: 'pointer',
    '&::after': {
      backgroundImage: inlineSvg(<CheckboxIcon color={theme.colorNew.goten} />),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 0,
    },
  },
  '&:hover:enabled, &:focus:enabled': {
    /* Show the Pseudo Checkbox Circle */
    '& + span::before': {
      opacity: 0.5,
      transform: 'scale(2)',
    },
    '&:checked + span::before': {
      opacity: 0.1,
      backgroundColor: theme.color.piccolo[100] /* [1] */,
    },
    /* Adjust the Pseudo Checkbox */
    '&:not(:checked) + span::after': {
      borderColor: theme.colorNew.trunks,
    },
  },
  /* Add the "check" to the Pseudo Checkbox */
  '&:checked + span::after': {
    backgroundColor: theme.color.piccolo[100],
    backgroundSize: rem(10),
    borderColor: theme.color.piccolo[100],
  },
  '&[disabled] + span': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

export default CheckboxInput;
