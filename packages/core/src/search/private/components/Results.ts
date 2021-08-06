import styled, { CSSObject } from 'styled-components';
import { em, mq, rem } from '@heathmont/moon-utils';
import { Theme } from '@heathmont/moon-themes';

import { COLOR_ACTIVE, menuConfig, zIndex } from './settings';

/**
 * Search Results List
 */
export const Results = styled.ul<{ size?: 'small' | 'medium'} >(
  ({
    theme: {
      breakpoint, borderWidth, boxShadow, fontWeight, color, radius,
    },
  }) => ({
    fontSize: 'inherit',
    fontWeight: fontWeight.normal,
    margin: 0,
    listStyleType: 'none',
    width: '100%',
    zIndex: zIndex.searchResults,
    [mq(breakpoint.medium, 'min-width')]: {
      position: 'absolute',
      left: 0,
      top: rem(48 + menuConfig.menuGap),
      width: 'auto',
      minWidth: '300px',
      padding: rem(12),
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
 * Nested results of grouped search searchResults, e.g. sports events or help articles.
 */
export const ResultsGroup = styled.ul({
  margin: 0,
  padding: 0,
});

/**
 * resultsContent
 * Internal layout of searchResults results items/links.
 */
export const resultsContent = ({ radius, space }: Theme): CSSObject => ({
  padding: `${em(space.xsmall * 3)} ${em(space.default)}`,
  fontSize: em(14),
  lineHeight: 1.2,
  textAlign: 'left',
  wordBreak: 'break-word',
  borderRadius: rem(radius.default),
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
export const ResultsLink = styled.li(({ theme }) => [
  resultsContent(theme),
  {
    display: 'block',
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

export const ResultsTab = styled.li(({ theme }) => [
  resultsContent(theme),
  {
    display: 'inline-block',
    fontWeight: theme.fontWeight.normal,
    appearance: 'none',
    border: 0,
    backgroundColor: 'transparent',
    color: theme.color.bulma[100],
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover, &:focus, &:active': {
      backgroundColor: COLOR_ACTIVE,
      color: '#fff',
    },
  },
]);
