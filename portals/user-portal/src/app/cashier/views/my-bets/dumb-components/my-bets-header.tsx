import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { inlineSVG, mq, spacing } from '@heathmont/sportsbet-utils';
import * as React from 'react';
import { colors } from '@heathmont/sportsbet-tokens';

export const MyBetsHeader = styled.div({
  marginTop: spacing('large'),
  display: 'grid',
  height: rem(48),
  padding: spacing(),
  backgroundColor: colors.neutral[70],
  gridTemplateColumns: '5fr 1fr 1fr 1fr 2fr',
  gridTemplateRows: '100%',
  alignItems: 'center',
  span: {
    textAlign: 'center',
  },
  'span:nth-child(1)': {
    textAlign: 'left',
  },
});
