import React from 'react';
import { GenericCheckAlternative } from '@heathmont/moon-icons';
import { inlineSvg } from '@heathmont/moon-utils';
import { rgba } from 'polished';
import hideVisually from 'polished/lib/mixins/hideVisually';
import styled from 'styled-components';

/**
 * Checkbox Input
 *
 * Hides the default input and handles interaction styles of the custom pseudo
 * checkbox on CheckboxCaption.
 */
const CheckboxInput = styled.input.attrs({ type: 'checkbox' })(({ theme }) => ({
  ...hideVisually(),
  '& + div': {
    cursor: 'pointer',
    color: theme.colorNew.bulma,
    '& > span::after': {
      backgroundImage: inlineSvg(
        <GenericCheckAlternative style={{ color: theme.colorNew.goten }} />
      ),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 0,
    },
  },
  '&:hover': {
    /* Show the Pseudo Checkbox Circle */
    '& + span > div > span': {
      backgroundColor: rgba(theme.colorNew.bulma, 0.12),
    },
  },
  /* Add the "check" to the Pseudo Checkbox */
  '&:checked': {
    '&:hover + div > span': {
      backgroundColor: rgba(theme.colorNew.piccolo, 0.12),
    },
    '& + div > span::after': {
      backgroundColor: theme.colorNew.piccolo,
      backgroundSize: '100%',
      boxShadow: 'none',
    },
  },
  '&[disabled] + div': {
    opacity: theme.newTokens.opacity,
    cursor: 'not-allowed',
    userSelect: 'none',
    '& > span': {
      backgroundColor: 'transparent',
    },
  },
  '&[readonly] + div': {
    cursor: 'not-allowed',
    userSelect: 'none',
    '& > span': {
      backgroundColor: 'transparent',
    },
  },
}));

export default CheckboxInput;
