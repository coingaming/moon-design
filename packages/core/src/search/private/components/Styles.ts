import styled from 'styled-components';
import { mq, rem } from '@heathmont/moon-utils';
import { Button } from '@heathmont/moon-components';

import { zIndex } from './settings';

const focusOutsideSearchPopup = '.popup:not(:focus-within)';

export const SearchForm = styled.form({
  display: 'flex',
  position: 'relative',
  overflow: 'visible',
  width: '100%',
});

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
    color: color.piccolo[100],
    [`${focusOutsideSearchPopup} &`]: {
      display: 'none',
    },
    ['&:hover:not([disabled])']: {
      color: color.piccolo[100],
    },
    [mq(breakpoint.medium, 'min-width')]: {
      display: 'none',
    },
  })
);

export const Results = styled.div(
  ({
    theme: { borderWidth, boxShadow, breakpoint, color, radius, space },
  }) => ({
    position: 'absolute',
    left: 0,
    top: rem(space.small),
    color: color.trunks[100],
    width: '100%',
    zIndex: zIndex.searchResults,
    [`${focusOutsideSearchPopup} &`]: {
      display: 'none',
    },
    '[dir=rtl] &': {
      left: 'auto',
      right: 0,
    },
    [mq(breakpoint.medium, 'min-width')]: {
      minWidth: '300px',
      maxWidth: '100%',
      boxSizing: 'border-box',
      padding: `${rem(space.small)} ${rem(space.xsmall)}`,
      borderRadius: rem(radius.default),
      borderWidth,
      borderStyle: 'solid',
      borderColor: color.beerus[100],
      backgroundColor: color.gohan[100],
      boxShadow,
    },
  })
);
