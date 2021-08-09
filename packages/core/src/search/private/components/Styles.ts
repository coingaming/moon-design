import styled from 'styled-components';
import { em, mq, rem } from '@heathmont/moon-utils';
import { Button } from '@heathmont/moon-components';

import {
  COLOR_TEXT,
  COLOR_ACTIVE,
  inputConfig,
  menuConfig,
  zIndex,
} from './settings';
import { SearchInputSize } from './SearchResults';

const { height, paddingX } = inputConfig;

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
    lineHeight: rem(height, base.fontSize),
    border: 0,
    position: 'relative',
    overflow: 'visible',
    padding: `0 ${rem(paddingX, base.fontSize)}`,
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
    theme: { breakpoint, borderWidth, boxShadow, fontWeight, color, radius },
    size,
  }) => {
    const posTop = size === 'small' ? 40 : 48;
    return {
      display: 'flex',
      flexDirection: 'column',
      gap: rem(16),
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
        top: rem(posTop + menuConfig.menuGap),
        width: 'auto',
        minWidth: '300px',
        padding: `${rem(8)} ${rem(4)}`,
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
export const ResultsBlock = styled.li({
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
    fontSize: rem(16),
    lineHeight: rem(24),
  },
  span: {
    display: 'inline-flex',
  },
});

const ResultsGroupList = styled.ul({
  display: 'flex',
  gap: rem(4),
  margin: 0,
  padding: 0,
});
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
  ({ theme: { breakpoint } }) => ({
    flexWrap: 'wrap',
    padding: `0 ${rem(8)}`,
    [mq(breakpoint.medium, 'min-width')]: {
      padding: `0 ${rem(4)}`,
    },
  })
);

/**
 * resultsContent
 * Internal layout of searchResults results items/links.
 */
export const resultsContent = styled.li(({ theme: { radius } }) => ({
  display: 'flex',
  gap: rem(4),
  overflow: 'hidden',
  border: 0,
  padding: 0,
  fontSize: rem(14),
  lineHeight: rem(20),
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
export const ResultsTitle = styled.span(({ theme: { breakpoint } }) => ({
  overflow: 'hidden',
  textAlign: 'left',
  wordBreak: 'break-word',
  padding: `${rem(10)} ${rem(8)}`,
  [mq(breakpoint.medium, 'min-width')]: {
    padding: rem(12),
  },
}));

/**
 * ResultsLink
 * Each searchResults items interactive element wrapper.
 */
export const ResultsLink = styled(resultsContent)(
  ({ theme: { breakpoint, color } }) => ({
    width: '100%',
    '&:hover, &:focus': {
      backgroundColor: color.goku[100],
      color: COLOR_TEXT,
    },
    '& > *': {
      width: '100%',
      padding: `${rem(10)} ${rem(8)}`,
    },
    [mq(breakpoint.medium, 'min-width')]: {
      fontSize: rem(16),
      lineHeight: rem(24),
      '& > *': {
        padding: rem(12),
      },
    },
  })
);

export const ResultsTab = styled(resultsContent)({
  display: 'inline-block',
  'a, button': {
    padding: `${rem(4)} ${rem(8)}`,
    fontSize: rem(14),
    lineHeight: rem(24),
    color: COLOR_TEXT,
    '&:hover, &:focus, &:active': {
      backgroundColor: COLOR_ACTIVE,
      color: '#fff',
    },
  },
});
