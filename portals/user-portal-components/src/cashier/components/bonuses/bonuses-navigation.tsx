/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import { buttonStyles } from '@heathmont/sportsbet-components';
import { buttonModifiers } from '@heathmont/sportsbet-components/lib/button/modifiers';
import {
  userPortalContainer,
  userPortalContainerInner,
} from '../../../shared/container';

jsx;

export const BonusesHeadingContainer = styled.div([
  {
    ...userPortalContainer,
    ...userPortalContainerInner,
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: spacing('large'),
    marginBottom: spacing(),
    [mq(breakpoints.medium)]: {
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

    overflowX: 'auto',

    '& > a': [
      buttonStyles,
      buttonModifiers.secondary,
      {
        marginRight: spacing('small'),
        flexShrink: 0,
      },
    ],
    '& > a.active': [buttonModifiers.primary],

    [mq(breakpoints.medium)]: {
      paddingLeft: 0,
      paddingRight: 0,
      marginTop: 0,
      '& > a': {
        marginRight: 0,
        marginLeft: spacing('small'),
      },
    },
  },
]);
