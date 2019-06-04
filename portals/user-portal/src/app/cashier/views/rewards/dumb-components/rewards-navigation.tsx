/** @jsx jsx */
import { Button } from '@heathmont/sportsbet-components';
import { default as React } from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { border, breakpoints, colors } from '@heathmont/sportsbet-tokens';
jsx;

export const RewardsHeadingContainer = styled.div([
  {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingLeft: spacing(),
    paddingTop: spacing('large'),
    paddingBottom: spacing(),
    paddingRight: spacing(),
    [mq(breakpoints.medium)]: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: spacing('medium'),
      // borderBottom: `${border.width}px ${border.style} ${colors.neutral[70]}`,
      flexWrap: 'nowrap',
    },
  },
]);

export const RewardsSubNavigation = styled.div([
  {
    marginTop: spacing('medium'),
    display: 'flex',
    flexWrap: 'nowrap',

    position: 'sticky',
    top: 0,
    zIndex: 1,
    overflowX: 'auto',

    Button: {
      marginRight: spacing(),
      flexShrink: 0,
    },

    [mq(breakpoints.medium)]: {
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: 0,
      Button: {
        marginRight: 0,
        marginLeft: spacing(),
      },
    },
  },
]);
