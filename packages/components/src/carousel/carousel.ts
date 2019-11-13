import styled from 'styled-components';

import { Reel } from '../reel/reel';

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
 *
 * `<any>` justification: https://coingaming.atlassian.net/browse/SPO-4963.
 */
export const Carousel = styled.div<any>({
  position: 'relative',
  width: '100%',
  overflowX: 'auto',
});

/**
 * Carousel Scroll
 *
 * The list of Carousel Items, controlling overflow and scroll behavior.
 */
export const CarouselScroll = styled(Reel.withComponent('ul'))({
  scrollSnapType: 'proximity',
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
      scrollSnapCoordinate: '0 0',
      [currentScrollingSpec]: {
        scrollSnapAlign: 'center',
        scrollSnapCoordinate: 'unset' /* 👴 */,
      },
    },
    inlineStyle,
  ]
);
