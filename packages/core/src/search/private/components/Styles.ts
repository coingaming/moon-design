import styled from 'styled-components';
import { mq, rem } from '@heathmont/moon-utils';
import { Button } from '@heathmont/moon-components';

import { zIndex } from './settings';

/**
 * Search Styles
 * The functional container for the search component.
 * We aren't using Design System form because we use focus-within logic here
 */
export const FlexWrapper = styled.div(({ theme: { space } }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  gap: rem(space.small),
}));

export const ModalClose = styled(Button)(
  ({ theme: { base, breakpoint, color, fontWeight, space } }) => ({
    position: 'relative',
    display: 'flex',
    flex: 0,
    border: 0,
    lineHeight: 1,
    padding: `0 ${rem(space.default)}`,
    fontWeight: fontWeight.normal,
    fontSize: rem(base.fontSize),
    overflow: 'visible',
    color: color.bulma[100],
    ['&:hover:not([disabled])']: {
      color: color.bulma[100],
    },
    [mq(breakpoint.medium, 'min-width')]: {
      display: 'none',
    },
  })
);

/**
 * Search Results List
 */
export const Results = styled.div(
  ({
    theme: {
      borderWidth,
      boxShadow,
      breakpoint,
      color,
      radius,
      space,
    },
  }) => ({
    position: 'absolute',
    left: 0,
    top: rem(space.small),
    color: color.trunks[100],
    width: '100%',
    zIndex: zIndex.searchResults,
    [mq(breakpoint.medium, 'min-width')]: {
      width: 'auto',
      minWidth: '300px',
      maxWidth: '100%',
      boxSizing: 'border-box',
      padding: `${rem(space.small)} ${rem(space.xsmall)}`,
      '&::before': {
        borderRadius: rem(radius.default),
        borderWidth,
        content: "' '",
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: color.gohan[100],
        boxShadow,
        top: `-${borderWidth}px`,
        left: `-${borderWidth}px`,
        borderStyle: 'solid',
        borderColor: color.beerus[100],
        zIndex: -1,
      },
    },
  })
);
