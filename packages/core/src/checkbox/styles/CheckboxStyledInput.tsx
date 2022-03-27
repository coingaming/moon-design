import React from 'react';
import {
  GenericCheckAlternative
} from '@heathmont/moon-icons';
import { inlineSvg, rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const BORDER_WIDTH = 2;

const CheckboxStyledInput = styled.figure(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  boxSizing: 'border-box',
  width: rem(16),
  height: rem(16),
  border: `${rem(BORDER_WIDTH)} solid ${theme.colorNew.trunks}`,
  borderRadius: rem(2),
  transition: theme.newTokens.transition.default,
  /* Common styles for the Pseudo Checkbox Circle and "check" */
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    width: rem(16),
    height: rem(16),
    top: rem(-BORDER_WIDTH),
    left: rem(-BORDER_WIDTH),
    transitionTimingFunction: 'ease',
  },
  /* Show the Pseudo Checkbox Circle */
  '&::before': {
    transition: theme.newTokens.transition.default,
    borderRadius: '50%',
  },
  /* Add the "check" to the Pseudo Checkbox */
  '&::after': {
    display: 'inline-block',
    backgroundImage: inlineSvg(<GenericCheckAlternative color={theme.colorNew.goten} forwardColor={true} />),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: rem(2),
    backgroundColor: 'transparent',
    backgroundSize: 0,
    transitionProperty: 'border-color',
  },
}));

export default CheckboxStyledInput;
