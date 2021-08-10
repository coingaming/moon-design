import styled from 'styled-components';
import { em, mq, rem } from '@heathmont/moon-utils';
import { Button } from '@heathmont/moon-components';

import { inputConfig, zIndex } from './settings';
import { SearchInputSize } from './SearchResults';

/**
 * Search Styles
 * The functional container for the search component.
 * We aren't using Design System form because we use focus-within logic here
 */
export const FlexWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
});

export const ModalClose = styled(Button)(
  ({ theme: { base, breakpoint, fontWeight, space } }) => ({
    fontWeight: fontWeight.normal,
    fontSize: rem(base.fontSize),
    lineHeight: 1,
    border: 0,
    position: 'relative',
    overflow: 'visible',
    padding: `0 ${rem(space.medium, base.fontSize)}`,
    marginLeft: rem(space.small, base.fontSize),
    display: 'flex',
    flex: 0,
    [mq(breakpoint.medium, 'min-width')]: {
      display: 'none',
    },
  })
);

/**
 * Search Results List
 */
export const Results = styled.ul<{ size?: SearchInputSize }>(
  ({
    theme: { breakpoint, borderWidth, boxShadow, fontWeight, color, radius, space },
    size,
  }) => {
    const posTop = size === 'small' ? 40 : 48;
    return {
      display: 'flex',
      flexDirection: 'column',
      gap: rem(space.default),
      fontSize: 'inherit',
      fontWeight: fontWeight.normal,
      color: color.trunks[100],
      margin: 0,
      listStyleType: 'none',
      width: '100%',
      zIndex: zIndex.searchResults,
      span: {
        display: 'inline-flex',
      },
      [mq(breakpoint.medium, 'min-width')]: {
        position: 'absolute',
        left: 0,
        top: rem(posTop + space.small),
        width: 'auto',
        minWidth: '300px',
        padding: `${rem(space.small)} ${rem(space.xsmall)}`,
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
    };
  }
);

/**
 * Search Results List Item
 */
export const ResultsBlock = styled.li(({ theme: base }) => ({
  display: 'inline-block',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  overflow: 'hidden',
  textAlign: 'left',
  wordBreak: 'break-word',
  '& > *': {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: rem(base.fontSize),
    lineHeight: rem(24),
  },
  span: {
    display: 'inline-flex',
  },
}));

const ResultsGroupList = styled.ul(({ theme: { space } }) => ({
  display: 'flex',
  gap: rem(space.xsmall),
  margin: 0,
  padding: 0,
}));
/**
 * Results Group
 * Nested results of grouped search searchResults, e.g. sports events or help articles.
 */
export const ResultsGroup = styled(ResultsGroupList)({
  flexDirection: 'column',
});

/**
 * Tabs Group
 * Nested tabs of grouped search tabs, e.g. sports events or help articles.
 */
export const TabsGroup = styled(ResultsGroupList)(
  ({ theme: { breakpoint, space } }) => ({
    flexWrap: 'wrap',
    padding: `0 ${rem(space.small)}`,
    [mq(breakpoint.medium, 'min-width')]: {
      padding: `0 ${rem(space.xsmall)}`,
    },
  })
);

/**
 * resultsContent
 * Internal layout of searchResults results items/links.
 */
export const resultsContent = styled.li(({ theme: { base, fontSize, radius, space } }) => ({
  display: 'flex',
  gap: rem(space.xsmall),
  overflow: 'hidden',
  border: 0,
  padding: 0,
  fontSize: rem(fontSize.body),
  lineHeight: rem(base.lineHeight),
  borderRadius: rem(radius.default),
  textAlign: 'left',
  wordBreak: 'break-word',
  textDecoration: 'none',
  cursor: 'pointer',
  appearance: 'none',
  '& > *': {
    display: 'inline-flex',
    alignItems: 'center',
    padding: rem(12),
  },
}));

/**
 * ResultsTitle
 * Any text inside Results that isn't a link, should be wrapped with this.
 */
export const ResultsTitle = styled.span(({ theme: { breakpoint, space } }) => ({
  overflow: 'hidden',
  textAlign: 'left',
  wordBreak: 'break-word',
  padding: `${rem(10)} ${rem(space.small)}`,
  [mq(breakpoint.medium, 'min-width')]: {
    padding: rem(12),
  },
}));

/**
 * ResultsLink
 * Each searchResults items interactive element wrapper.
 */
export const ResultsLink = styled(resultsContent)(
  ({ theme: { base, breakpoint, color, space } }) => ({
    width: '100%',
    '&:hover, &:focus': {
      backgroundColor: color.goku[100],
      color: color.bulma[100],
    },
    '& > *': {
      width: '100%',
      padding: `${rem(10)} ${rem(space.small)}`,
    },
    [mq(breakpoint.medium, 'min-width')]: {
      fontSize: rem(base.fontSize),
      lineHeight: rem(24),
      '& > *': {
        padding: rem(12),
      },
    },
  })
);

export const ResultsTab = styled(resultsContent)(({ theme: { color, fontSize, space } }) => ({
  display: 'inline-block',
  'a, button': {
    padding: `${rem(space.xsmall)} ${rem(space.small)}`,
    fontSize: rem(fontSize.body),
    lineHeight: rem(24),
    color: color.bulma[100],
    '&:hover, &:focus, &:active': {
      backgroundColor: color.piccolo[100],
      color: color.gohan[100],
    },
  },
}));
