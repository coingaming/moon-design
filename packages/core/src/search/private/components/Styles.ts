import { Button } from '@heathmont/moon-components';
import { Theme } from '@heathmont/moon-themes';
import { mq, rem } from '@heathmont/moon-utils';
import styled, { CSSObject } from 'styled-components';
import { zIndex } from './settings';

const focusOutsideSearchPopup = '.popup:not(:focus-within)';

export const resultsInactive = ({ newTokens }: Theme): CSSObject => ({
  opacity: 0,
  visibility: 'hidden',
  maxHeight: 0,
  transition: `visibility 0s linear ${newTokens.transitionDuration}, opacity ${newTokens.transitionDuration}, max-height ${newTokens.transitionDuration}`,
});

export const resultsActive = ({ newTokens }: Theme): CSSObject => ({
  opacity: 1,
  visibility: 'visible',
  maxHeight: '100vh',
  transition: `visibility 0s linear 0s, opacity ${newTokens.transitionDuration}, max-height ${newTokens.transitionDuration}`,
});

export const SearchForm = styled.form({
  display: 'flex',
  position: 'relative',
  overflow: 'visible',
  width: '100%',
});

export const FlexWrapper = styled.div(({ theme: { newTokens } }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  gap: newTokens.space.xsmall,
}));

export const ModalClose = styled(Button)(
  ({ theme: { base, breakpoint, colorNew, newTokens } }) => ({
    position: 'relative',
    display: 'none',
    flex: 0,
    border: 0,
    lineHeight: 1,
    padding: `0 ${newTokens.space.small}`,
    fontWeight: newTokens.font.weight.normal,
    fontSize: rem(base.fontSize),
    overflow: 'visible',
    color: colorNew.piccolo,
    ['&:hover:not([disabled])']: {
      color: colorNew.piccolo,
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
  ({ theme: { breakpoint, colorNew, newTokens } }) => ({
    position: 'absolute',
    left: 0,
    top: newTokens.space.xsmall,
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
      padding: `${newTokens.space.xsmall} ${newTokens.space.twoxsmall}`,
      borderRadius: newTokens.borderRadius.medium,
      borderWidth: newTokens.borderWidth,
      borderStyle: 'solid',
      borderColor: colorNew.beerus,
      backgroundColor: colorNew.gohan,
      boxShadow: newTokens.boxShadow.large,
    },
  })
);
