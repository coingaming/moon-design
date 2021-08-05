import styled, { CSSObject } from 'styled-components';
import { em, rem } from '@heathmont/moon-utils';
import { Theme } from '@heathmont/moon-themes';

import { inputConfig, zIndex } from './settings';

export const resultsInactive = ({ transitionDuration }: Theme): CSSObject => ({
  opacity: 0,
  visibility: 'hidden',
  transition: `visibility 0s linear ${transitionDuration.default}s, opacity ${transitionDuration.default}s`,
});

export const resultsActive = ({ transitionDuration }: Theme): CSSObject => ({
  opacity: 1,
  visibility: 'visible',
  transition: `visibility 0s linear 0s, opacity ${transitionDuration.default}s`,
});

/**
 * Search Results List
 */
export const Results = styled.ul(
  ({ theme }) => resultsInactive(theme),
  ({
    theme: {
      borderWidth, boxShadow, fontWeight, color, radius, space,
    },
  }) => ({
    fontSize: 'inherit',
    fontWeight: fontWeight.normal,
    position: 'absolute',
    margin: 0,
    listStyleType: 'none',
    top: rem(48 + 20),
    left: 0,
    zIndex: zIndex.searchResults,
    padding: `${rem(8)} ${rem(4)} ${rem(4)}`,
    '&::before': {
      borderRadius: em(radius.default),
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
  }),
);

/**
 * Search Results List Item
 */
export const ResultsItem = styled.li(({ theme: { color } }) => ({
  margin: 0,
  listStyleType: 'none',
  color: color.trunks[100],
}));

/**
 * Results Group
 * Nested list of grouped search searchResults, e.g. sports events or help articles.
 */
export const ResultsGroup = styled.ul({
  margin: 0,
  padding: 0,
});

/**
 * resultsContent
 * Internal layout of searchResults list items/links.
 */
export const resultsContent = ({ space }: Theme): CSSObject => ({
  display: 'block',
  padding: `${em(space.xsmall * 3)} ${em(space.default)}`,
  fontSize: em(14),
  lineHeight: 1.2,
  textAlign: 'left',
  wordBreak: 'break-word',
});

/**
 * ResultsItemText
 * Any text inside Results that isn't a link, should be wrapped with this.
 */
export const ResultsItemText = styled.span(({ theme }) =>
  resultsContent(theme));

/**
 * ResultsLink
 * Each searchResults items interactive element wrapper.
 */
export const ResultsLink = styled.div(({ theme }) => [
  resultsContent(theme),
  {
    fontWeight: theme.fontWeight.normal,
    appearance: 'none',
    border: 0,
    backgroundColor: 'transparent',
    color: theme.color.bulma[100],
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover, &:focus': {
      backgroundColor: theme.color.goku[100],
    },
  },
]);
