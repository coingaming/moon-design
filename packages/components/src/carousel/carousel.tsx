import * as React from 'react';
import styled from 'styled-components';
import { IconChevronLeft } from '@heathmont/sportsbet-assets';

import { Reel } from '../reel/reel';

import { CarouselControl, CarouselControlCaption } from './control';
import { withHorizontalScroll } from './withHorizontalScroll';
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
const CarouselWrapper = styled.div<any>({
  position: 'relative',
  width: '100%',
  overflowX: 'auto',
});

/**
 * Carousel Scroll
 *
 * The list of Carousel Items, controlling overflow and scroll behavior.
 */
const CarouselScroll = styled(Reel.withComponent('ul'))({
  scrollSnapType: 'proximity',
  scrollSnapDestination: '0 50%',
  scrollSnapPointsX: 'repeat(100%)',
  [currentScrollingSpec]: {
    scrollSnapType: 'x mandatory',
    scrollSnapDestination: 'unset' /* 👴 */,
    scrollSnapPointsX: 'unset' /* 👴 */,
  },
});

CarouselScroll.defaultProps = {
  space: 'default',
};

/**
 * Carousel Scroll Item
 *
 * The individual `list-item` of Carousel Scroll
 */
const CarouselScrollItem = styled.li<any>({
  scrollSnapCoordinate: '0 0',
  [currentScrollingSpec]: {
    scrollSnapAlign: 'center',
    scrollSnapCoordinate: 'unset' /* 👴 */,
  },
});

type CarouselProps = {
  items: React.HTMLAttributes<HTMLElement>[];
  scrollToLeftButton?: any;
  scrollToRightButton?: any;
  step?: number;
  scrollTo?: number;
};

export const Carousel: React.FC<CarouselProps> = ({
  items,
  step,
  scrollTo,
}) => {
  const {
    itemRef,
    scrollLeftToStep,
    scrollRightToStep,
    containerRef,
    scrollToIndex,
    canScrollLeft,
    canScrollRight,
  } = withHorizontalScroll({ scrollStep: step || 5 });

  React.useEffect(() => {
    if (scrollTo) {
      scrollToIndex(scrollTo);
    }
  }, []);

  return (
    <CarouselWrapper>
      <CarouselControl onClick={scrollLeftToStep} disabled={!canScrollLeft}>
        <CarouselControlCaption>Scroll Left</CarouselControlCaption>
        <IconChevronLeft />
      </CarouselControl>
      <CarouselScroll ref={containerRef}>
        {items.map(
          (item: React.ReactNode, index: string | number | undefined) => (
            // eslint-disable-next-line react/no-array-index-key
            <CarouselScrollItem key={index} ref={itemRef}>
              {item}
            </CarouselScrollItem>
          )
        )}
      </CarouselScroll>
      <CarouselControl onClick={scrollRightToStep} disabled={!canScrollRight}>
        <CarouselControlCaption>Scroll Right</CarouselControlCaption>
        <IconChevronLeft />
      </CarouselControl>
    </CarouselWrapper>
  );
};
