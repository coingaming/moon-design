/** @jsx jsx */
import * as React from 'react';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';
jsx;

export const Userhub = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  color: colors.neutral[20],
  '&:hover': {
    color: colors.neutral[10],
  },
});

export const UserhubInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignItems: 'flex-end',
  marginRight: spacing('small'),
  [mq(breakpoints.small)]: {
    marginRight: spacing('medium'),
  },
});

export const UserhubInfoUsername = styled.p({
  display: 'none',
  [mq(breakpoints.small)]: {
    display: 'inline',
  },
});

export const UserhubInfoBalance = styled.p({
  marginTop: 0,
  textAlign: 'center',
  color: colors.neutral[10],
});

export const UserhubIconProfile = styled.div({
  fontSize: '1.25rem',
  marginRight: spacing(),
  [mq(breakpoints.small)]: {
    marginRight: 0,
  },
});
