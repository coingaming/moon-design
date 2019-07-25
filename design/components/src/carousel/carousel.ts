import styled from '@emotion/styled';
import { listItemStyleTypeNone } from '@heathmont/sportsbet-objects';
import { border, colors } from '@heathmont/sportsbet-tokens';
import { CarouselInlineStyleProps } from './types';

/**
 * Settings
 *
 * If a browser supports the new scroll snap specification, use the styles
 * and disable legacy spec (keyed with 👴)
 */
const currentScrollingSpec = `@supports (scroll-snap-align: start)`;

/**
 * Carousel
 *
 * The outer Carousel container, allowing absolute positioning inside.
 */
export const Carousel = styled.div({
  position: 'relative',
  width: '100%',
});

/**
 * Carousel Scroll
 *
 * The list of Carousel Items, controlling overflow and scroll behavior.
 */
export const CarouselScroll = styled.ul({
  display: 'block',
  verticalAlign: 'top',
  overflowX: 'auto',
  overflowY: 'hidden',
  width: '100%',
  height: '100%',
  whiteSpace: 'nowrap',
  WebkitOverflowScrolling: 'touch',
  /** Hide Scrollbars on browsers that don't support custom scrollbars */
  scrollbarWidth: 'none',
  /* Auto-hide scrollbars on IE/Edge */
  '-ms-overflow-style': '-ms-autohiding-scrollbar',
  /* Custom Chrome Scroll Behaviour */
  '::-webkit-scrollbar': {
    width: 12,
    height: 12,
    cursor: 'pointer',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent',
    borderRadius: border.radius.largest,
    border: `${3}px solid ${colors.neutral[90]}`,
  },
  ':hover::-webkit-scrollbar-thumb': {
    backgroundColor: colors.neutral[40],
  },
  /* Scroll Snapping */
  scrollSnapType: 'mandatory',
  scrollSnapDestination: '0 50%',
  scrollSnapPointsX: 'repeat(100%)',
  [currentScrollingSpec]: {
    scrollSnapType: 'x mandatory',
    scrollSnapDestination: 'unset' /* 👴 */,
    scrollSnapPointsX: 'unset' /* 👴 */,
  },
});

/**
 * Carousel Scroll Item
 *
 * The individual `list-item` of Carousel Scroll
 */
export type CarouselScrollItemProps = CarouselInlineStyleProps;

export const CarouselScrollItem = styled.li<CarouselScrollItemProps>(
  ({ inlineStyle }) => [
    {
      ...listItemStyleTypeNone,
      display: 'inline-block',
      verticalAlign: 'top',
      scrollSnapCoordinate: '0 0',
      [currentScrollingSpec]: {
        scrollSnapAlign: 'center',
        scrollSnapCoordinate: 'unset' /* 👴 */,
      },
    },
    inlineStyle,
  ]
);
