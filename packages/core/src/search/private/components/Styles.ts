import { Theme } from '@heathmont/moon-themes';
import { mq, media, rem } from '@heathmont/moon-utils';
import styled, { CSSObject } from 'styled-components';
import { Button } from '../../../';
import { zIndex } from './settings';

const focusOutsideSearchPopup = '.popup:not(:focus-within)';

export const resultsInactive = ({ newTokens }: Theme): CSSObject => ({
  opacity: 0,
  visibility: 'hidden',
  maxHeight: 0,
  transition: `visibility 0s linear, opacity ${newTokens.transition.default}, max-height ${newTokens.transition.default}`,
});

export const resultsActive = ({ newTokens }: Theme): CSSObject => ({
  opacity: 1,
  visibility: 'visible',
  maxHeight: '100vh',
  transition: `visibility 0s linear, opacity ${newTokens.transition.default}, max-height ${newTokens.transition.default}`,
});

export const SearchForm = styled.form({
  display: 'flex',
  position: 'relative',
  overflow: 'visible',
  width: '100%',
});

export const FlexWrapper = styled.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  gap: rem(12),
});

export const ModalClose = styled(Button)(
  ({ theme: { breakpoint, colorNew, newTokens } }) => ({
    position: 'relative',
    display: 'none',
    flex: 0,
    border: 0,
    lineHeight: 1,
    padding: `0 ${rem(16)}`,
    fontWeight: newTokens.font.weight.normal,
    fontSize: newTokens.font.size,
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
    [media(theme.newTokens.breakpoint.medium)]: {
      [`${focusOutsideSearchPopup} &`]: resultsInactive(theme),
    },
  }),
  ({ theme: { colorNew, newTokens } }) => ({
    position: 'absolute',
    left: 0,
    top: rem(12),
    color: colorNew.trunks,
    width: '100%',
    zIndex: zIndex.searchResults,
    '[dir=rtl] &': {
      left: 'auto',
      right: 0,
    },
    [media(newTokens.breakpoint.medium)]: {
      minWidth: '300px',
      maxWidth: '100%',
      boxSizing: 'border-box',
      padding: `${rem(12)} ${rem(8)}`,
      borderRadius: newTokens.borderRadius.medium,
      border: newTokens.border.default,
      borderColor: colorNew.beerus,
      backgroundColor: colorNew.gohan,
      boxShadow: newTokens.boxShadow.large,
    },
  })
);
