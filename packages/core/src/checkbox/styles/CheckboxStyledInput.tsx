import React from 'react';
import { inlineSvg, rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import { CheckboxIcon } from '../private/icon';

const BORDER_WIDTH = 2;

const CheckboxStyledInput = styled.figure(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  boxSizing: 'border-box',
  width: theme.newTokens.size.twoxsmall,
  height: theme.newTokens.size.twoxsmall,
  border: `${rem(BORDER_WIDTH)} solid ${theme.colorNew.trunks}`,
  borderRadius: rem(2),
  transitionDuration: `${theme.transitionDuration.default}s`,
  /* Common styles for the Pseudo Checkbox Circle and "check" */
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    width: theme.newTokens.size.twoxsmall,
    height: theme.newTokens.size.twoxsmall,
    top: rem(-BORDER_WIDTH),
    left: rem(-BORDER_WIDTH),
    transitionTimingFunction: 'ease',
  },
  /* Show the Pseudo Checkbox Circle */
  '&::before': {
    transitionDuration: `${theme.newTokens.transition.default}`,
    borderRadius: '50%',
  },
  /* Add the "check" to the Pseudo Checkbox */
  '&::after': {
    display: 'inline-block',
    backgroundImage: inlineSvg(<CheckboxIcon color={theme.colorNew.goten} />),
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: rem(2),
    backgroundColor: 'transparent',
    backgroundSize: 0,
    transitionProperty: 'border-color',
  },
}));

export default CheckboxStyledInput;
