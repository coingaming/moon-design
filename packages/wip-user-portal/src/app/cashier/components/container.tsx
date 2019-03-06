import { css } from '@emotion/core';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { breakpoints } from '@heathmont/sportsbet-tokens';

export const container = () =>
  css({
    maxWidth: '1600px',
    padding: spacing('medium'),
    [mq(breakpoints.medium)]: {
      padding: `${spacing('xlarge')} ${spacing('large')}`,
      marginRight: 'auto',
      marginLeft: 'auto',
    },
  });
