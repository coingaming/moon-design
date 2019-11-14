import styled, { CSSObject } from 'styled-components';
import { border, colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

import { listItemStyleTypeNone } from '../lists/lists';

export type ReelProps = {
  height?: CSSObject['height'];
  space?: CSSObject['margin'];
};

/**
 * Reel
 *
 * Based on the Reel component from every-layout.dev
 */
export const Reel = styled.div<ReelProps>(
  {
    display: 'flex',
    overflowX: 'auto',
    overflowY: 'hidden',
    /**
     * Scroll Behavior
     * 1. Hide Scrollbars on browsers that don't support custom scrollbars.
     * 2. Auto-hide scrollbars on IE/Edge.
     * 3. Create 'padding' around the scrollbar.
     */
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none' /* [1] */,
    '-ms-overflow-style': '-ms-autohiding-scrollbar' /* [2] */,
    '::-webkit-scrollbar': {
      width: 12,
      height: 12,
      cursor: 'pointer',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent',
      backgroundClip: 'content-box' /* [3] */,
      borderRadius: border.radius.largest,
      border: '3px solid transparent' /* [3] */,
    },
    ':hover::-webkit-scrollbar-thumb': {
      backgroundColor: colors.neutral[40],
    },
    /**
     * Elements
     * 1. Ensure all list-items render without bullets
     * 2. Set content width to auto
     * 3. When content is set to images, ensure they all remain the same height.
     */
    '& > li': listItemStyleTypeNone /* [1] */,
    '& > *': { flex: '0 0 auto' } /* [2] */,
    '& > img': { height: '100%', flexBasis: 'auto', width: 'auto' } /* [3] */,
  },
  ({ height = 'auto', space = spacing() }) => ({
    height,
    '& > * + *': {
      marginLeft: space,
    },
  })
);
