import { Button } from '@heathmont/moon-components';
import { Theme } from '@heathmont/moon-themes';
import { mq, rem } from '@heathmont/moon-utils';
import styled, { CSSObject } from 'styled-components';
import { zIndex } from './settings';

const focusOutsideSearchPopup = '.popup:not(:focus-within)';

export const resultsInactive = ({ transitionDuration }: Theme): CSSObject => ({
  opacity: 0,
  visibility: 'hidden',
  maxHeight: 0,
  transition: `visibility 0s linear ${transitionDuration.default}s, opacity ${transitionDuration.default}s, max-height ${transitionDuration.default}s`,
});

export const resultsActive = ({ transitionDuration }: Theme): CSSObject => ({
  opacity: 1,
  visibility: 'visible',
  maxHeight: '100vh',
  transition: `visibility 0s linear 0s, opacity ${transitionDuration.default}s, max-height ${transitionDuration.default}s`,
});

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
    display: 'none',
    flex: 0,
    border: 0,
    lineHeight: 1,
    padding: `0 ${rem(space.default)}`,
    fontWeight: fontWeight.normal,
    fontSize: rem(base.fontSize),
    overflow: 'visible',
    color: color.piccolo[100],
    ['&:hover:not([disabled])']: {
      color: color.piccolo[100],
    },
    [mq(breakpoint.medium, 'max-width')]: {
      '.active &': {
        display: 'flex',
      },
    },
  })
);

export const Results = styled.div(
  ({ theme }) => ({
    [mq(theme.breakpoint.medium, 'max-width')]: {
      ...resultsInactive(theme),
      ['.active &']: resultsActive(theme),
    },
    [mq(theme.breakpoint.medium, 'min-width')]: {
      [`${focusOutsideSearchPopup} &`]: resultsInactive(theme),
    },
  }),
  ({
    theme: { borderWidth, shadows, breakpoint, color, colorNew, radius, space },
  }) => ({
    position: 'absolute',
    left: 0,
    top: rem(space.small),
    color: colorNew.trunks,
    width: '100%',
    zIndex: zIndex.searchResults,
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
      borderColor: colorNew.beerus,
      backgroundColor: color.gohan[100],
      boxShadow: shadows.lg,
    },
  })
);
