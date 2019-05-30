import * as React from 'react';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { border, breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { inlineSVG, mq, spacing } from '@heathmont/sportsbet-utils';
import { IconChevronDown, IconChevronUp } from '@heathmont/sportsbet-icons';

import { inputColors } from '@heathmont/sportsbet-components/lib/private/input';

export const SettingsBlockCollapsible = styled.details<{
  open?: boolean;
  onToggle?: any;
}>(({ open }) => [
  {
    position: 'relative',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '&[open]': {
      Summary: {
        borderBottom: `${border.width}px solid ${colors.neutral[70]}`,
        '&::-webkit-details-marker': {
          backgroundImage: inlineSVG(
            <IconChevronUp color={colors.neutral[40]} />
          ),
        },
      },
    },
  },
]);

export const SummaryAccount = styled.summary<{}>(() => [
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: spacing(),
    paddingRight: spacing(),
    paddingTop: spacing('medium'),
    paddingBottom: spacing('medium'),
    cursor: 'pointer',
    boxSizing: 'border-box',
    [mq(breakpoints.medium)]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    /* arrow */
    '&::-webkit-details-marker': {
      backgroundImage: inlineSVG(<IconChevronDown color={inputColors.icon} />),
      backgroundSize: 'cover',
      color: 'transparent',
      width: rem(10),
      height: rem(10),
      position: 'absolute',
      right: spacing('large'),
      top: `calc(${spacing('large')} + 5px)`,
      [mq(breakpoints.medium)]: {
        right: spacing('small'),
      },
    },
  },
]);

export const SettingsBlockCollapsibleContents = styled.div({
  display: 'flex',
  flexFlow: 'wrap',
  alignItems: 'center',
  boxSizing: 'border-box',
  paddingLeft: spacing(),
  paddingRight: spacing(),
  paddingTop: spacing('medium'),
  paddingBottom: spacing('medium'),
  [mq(breakpoints.medium)]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export const CollapsibleItem = styled.div((props: any) => ({
  'flex-basis': '100%',
  ...props.css,
  [mq(breakpoints.medium)]: {
    ...props.cssMqMedium,
  },
}));

export const Separator = styled.div({
  width: '100%',
  height: `${border.width}px`,
  backgroundColor: colors.neutral[70],
});
