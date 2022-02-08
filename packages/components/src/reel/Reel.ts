import { SpaceProps } from '@heathmont/moon-themes';
import { themed, rem } from '@heathmont/moon-utils';
import styled, { CSSObject } from 'styled-components';

import listItemStyleTypeNone from '../listItemStyleTypeNone/listItemStyleTypeNone';

export type ReelProps = {
  height?: CSSObject['height'];
  /**
   * Excepts a string value, number or a theme key.
   *
   * Theme keys are returned as a `rem`-based unit.
   *
   * e.g. `<Stack space="large" />` returns `space.large` as a rem unit.
   */
  space?: SpaceProps | CSSObject['margin'];
  dir?: 'ltr' | 'rtl' | 'auto';
};

/**
 * Reel
 *
 * Based on the Reel component from every-layout.dev
 */
const Reel = styled.div<ReelProps>(({ height, space, theme, dir }) => [
  {
    display: 'flex',
    overflowX: 'auto',
    overflowY: 'hidden',
    height,
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
      borderRadius: rem(theme.radius.largest),
      border: '3px solid transparent' /* [3] */,
    },
    ':hover::-webkit-scrollbar-thumb': {
      backgroundColor: theme.color.goku[40],
    },
    /**
     * Elements
     * 1. Ensure direct child list-items render without bullets
     * 2. Set content width to auto
     * 3. When content is set to images, ensure they all remain the same height.
     */
    '& > li': listItemStyleTypeNone /* [1] */,
    '& > *': { flex: '0 0 auto' } /* [2] */,
    '& > img': { height: '100%', flexBasis: 'auto', width: 'auto' } /* [3] */,
  },
  dir === 'rtl'
    ? {
        '& > * + *': {
          marginRight: themed('space', space)(theme),
        },
      }
    : {
        '& > * + *': {
          marginLeft: themed('space', space)(theme),
        },
      },
]);

Reel.defaultProps = {
  height: 'auto',
  space: 'default',
};

export default Reel;
