import * as React from 'react';
import styled from '@emotion/styled';
import { breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';

export const BonusWrapper = styled.div({
  marginLeft: spacing(),
  marginRight: spacing(),
  marginBottom: spacing(),
  display: 'grid',
  gridTemplateColumns: '1fr',
  rowGap: spacing(),
  [mq(breakpoints.medium)]: {
    marginLeft: 0,
    marginRight: 0,
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    columnGap: spacing('medium'),
    rowGap: spacing('medium'),
  },
});

export const CardCaption = styled.p({
  marginTop: spacing('xsmall'),
  color: colors.neutral[20],
});
