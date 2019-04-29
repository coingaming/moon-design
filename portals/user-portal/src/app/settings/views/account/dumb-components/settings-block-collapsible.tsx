import styled from '@emotion/styled';
import { border, breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { inlineSVG, mq, spacing } from '@heathmont/sportsbet-utils';
import rem from '../../../../../../../../node_modules/polished/lib/helpers/rem';
import { IconChevronDown, IconChevronUp } from '@heathmont/sportsbet-icons';
import { inputColors } from '@heathmont/sportsbet-components/lib/private/input';
import * as React from 'react';

export const SettingsBlockCollapsible = styled.details<{ open?: boolean }>(
  ({ open }) => [
    {
      position: 'relative',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      '&[open]': {
        Summary: {
          borderBottom: `${border.width}px solid ${colors.neutral[40]}`,
          '&::-webkit-details-marker': {
            backgroundImage: inlineSVG(
              <IconChevronUp color={inputColors.icon} />
            ),
          },
        },
      },
    },
  ]
);

export const Summary = styled.summary<{}>(() => [
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: spacing('large'),
    paddingRight: spacing('large'),
    paddingTop: spacing('medium'),
    paddingBottom: spacing('medium'),
    cursor: 'pointer',
    boxSizing: 'border-box',
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

export const SettingsBlockCollapsibleContents = styled.div<{}>(() => [
  {
    paddingLeft: spacing('large'),
    paddingRight: spacing('large'),
    paddingTop: spacing('medium'),
    paddingBottom: spacing('medium'),
    boxSizing: 'border-box',
    display: 'flex',
    flexFlow: 'wrap',
    alignItems: 'center',
  },
]);

export const CollapsibleItem = styled.div((props: any) => ({
  'flex-basis': '100%',
  ...props.css,
  [mq(breakpoints.medium)]: {
    ...props.cssMqMedium,
  },
}));

export const Separator = styled.div(() => ({
  width: '100%',
  height: `${border.width}px`,
  backgroundColor: colors.neutral[40],
}));
