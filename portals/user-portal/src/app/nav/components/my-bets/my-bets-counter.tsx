/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import styled, { CSSObject } from '@emotion/styled';
import { IconSearch } from '@heathmont/sportsbet-icons';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import {
  colors,
  border,
  base,
  typography,
  breakpoints,
} from '@heathmont/sportsbet-tokens';

export const Digit = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.neutral[60],
  backgroundColor: colors.neutral[20],
  textAlign: 'center',
  marginTop: 0,
  width: spacing('small'),
  marginRight: rem(2),
  fontSize: rem(10),
  height: spacing(),
  borderRadius: rem(2),
});

export const MyBetsCounter = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'nowrap',
});
