/** @jsx jsx */
import { default as React } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { breakpoints } from '@heathmont/sportsbet-tokens';
jsx;

export const BonusesHeadingContainer = styled.div([
  {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginLeft: spacing(),
    marginTop: spacing('large'),
    marginBottom: spacing(),
    marginRight: spacing(),
    [mq(breakpoints.medium)]: {
      marginLeft: 0,
      marginRight: 0,
      marginBottom: spacing('medium'),
      // borderBottom: `${border.width}px ${border.style} ${colors.neutral[70]}`,
      flexWrap: 'nowrap',
    },
  },
]);

export const BonusesSubNavigation = styled.div([
  {
    marginTop: spacing('medium'),
    display: 'flex',
    flexWrap: 'nowrap',

    position: 'sticky',
    top: 0,
    zIndex: 1,
    overflowX: 'auto',

    '& > *': {
      marginRight: spacing(),
      flexShrink: 0,
    },

    [mq(breakpoints.medium)]: {
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: 0,
      '& > *': {
        marginRight: 0,
        marginLeft: spacing(),
      },
    },
  },
]);
