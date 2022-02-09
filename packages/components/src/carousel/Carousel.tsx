import React from 'react';
import { SpaceProps } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import styled, { CSSObject } from 'styled-components';

import IconChevronLeft from '../private/icons/IconChevronLeft';
import Reel from '../reel/Reel';
import { withHorizontalScroll } from '../withHorizontalScroll/withHorizontalScroll';

import { CarouselControl, CarouselControlCaption } from './control';
/**
 * Settings
 *
 * If a browser supports the new scroll snap specification, use the styles
 * and disable legacy spec (keyed with 👴)
 */
const currentScrollingSpec = '@supports (scroll-snap-align: start)';

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
});

/**
 * Carousel Scroll
 *
 * The list of Carousel Items, controlling overflow and scroll behavior.
 */
const ItemsScrollWrapper = styled(Reel.withComponent('ul'))<{
  horizontalEdgeGap: CarouselProps['horizontalEdgeGap'];
  hideScrollbar: CarouselProps['hideScrollbar'];
}>(
  ({ horizontalEdgeGap }) =>
    horizontalEdgeGap && {
      padding: `0 ${rem(horizontalEdgeGap)}`,
      margin: `0 ${rem(-horizontalEdgeGap)}`,
    },
  ({ hideScrollbar }) =>
    hideScrollbar && {
      '&::-webkit-scrollbar': { display: 'none' },
      '-ms-overflow-style': 'none',
      scrollbarWidth: 'none',
    },
  {
    scrollSnapType: 'mandatory',
    scrollSnapDestination: '0 50%', // TODO, deprecated css property
    scrollSnapPointsX: 'repeat(100%)', // TODO, deprecated css property
    [currentScrollingSpec]: {
      scrollSnapType: 'x mandatory',
      scrollSnapDestination: 'unset' /* 👴 */, // TODO, deprecated css property
      scrollSnapPointsX: 'unset' /* 👴 */, // TODO, deprecated css property
    },
  }
);

ItemsScrollWrapper.defaultProps = {
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

const DefaultScrollToLeftButton = ({
  scrollLeftCaption = 'Scroll Left',
  disabled = false,
  isRtl = false,
  ...rest
}) =>
  disabled ? null : (
    <CarouselControl {...rest}>
      <CarouselControlCaption>{scrollLeftCaption}</CarouselControlCaption>
      <IconChevronLeft />
    </CarouselControl>
  );

const DefaultScrollToRightButton = ({
  scrollRightCaption = 'Scroll Right',
  disabled = false,
  isRtl = false,
  ...rest
}) =>
  disabled ? null : (
    <CarouselControl {...rest}>
      <CarouselControlCaption>{scrollRightCaption}</CarouselControlCaption>
      <IconChevronLeft />
    </CarouselControl>
  );

const generateItems = (
  items: Array<any> | Function,
  itemRef: HTMLElement,
  isRtl: boolean,
  firstVisibleIndex: number,
  lastVisibleIndex: number
) => {
  const elements: HTMLElement[] =
    typeof items === 'function'
      ? items({ firstVisibleIndex, lastVisibleIndex }).map(
          (item: React.ReactNode, index: string | number | undefined) => (
            // eslint-disable-next-line react/no-array-index-key
            <CarouselScrollItem key={index} ref={itemRef}>
              {item}
            </CarouselScrollItem>
          )
        )
      : items.map(
          (item: React.ReactNode, index: string | number | undefined) => (
            // eslint-disable-next-line react/no-array-index-key
            <CarouselScrollItem key={index} ref={itemRef}>
              {item}
            </CarouselScrollItem>
          )
        );

  return isRtl ? (elements as HTMLElement[]).reverse() : elements;
};
interface CarouselProps {
  items: any;
  scrollToLeftButton?: any;
  scrollToRightButton?: any;
  scrollLeftCaption?: any;
  scrollRightCaption?: any;
  step?: number;
  scrollTo?: number;
  selectedIndex?: number;
  space?: SpaceProps | CSSObject['margin'];
  horizontalEdgeGap?: number | boolean;
  hideScrollbar?: boolean;
  isRtl?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  step,
  scrollTo,
  scrollToLeftButton,
  scrollToRightButton,
  scrollLeftCaption,
  scrollRightCaption,
  space,
  horizontalEdgeGap,
  hideScrollbar,
  selectedIndex,
  isRtl,
}) => {
  const {
    itemRef,
    scrollLeftToStep,
    scrollRightToStep,
    containerRef,
    scrollToIndex,
    canScrollLeft,
    canScrollRight,
    firstVisibleIndex,
    lastVisibleIndex,
  } = withHorizontalScroll({ scrollStep: step || 5 });

  React.useEffect(() => {
    if (!selectedIndex) {
      return;
    }
    scrollToIndex(selectedIndex);
  }, []);

  React.useEffect(() => {
    if (!scrollTo) {
      return;
    }
    // We scroll for another extra item because we defined our THRESHOLD = 0.75;
    // It means that item will be visible for 75%.
    // We scroll one more to guarantee 100% visibility.
    // "items.length - 1" because indices start from 0.
    if (scrollTo && scrollTo < items.length - 1) {
      scrollToIndex(scrollTo + 1);
    }
    // No point for scroll another extra item because that's the last one
    if (scrollTo && scrollTo === items.length - 1) {
      scrollToIndex(scrollTo);
    }
  }, []);

  return (
    <CarouselWrapper>
      {scrollToLeftButton ? (
        scrollToLeftButton({
          scrollToStep: scrollLeftToStep,
          disabled: !canScrollLeft,
        })
      ) : (
        <DefaultScrollToLeftButton
          onClick={scrollLeftToStep}
          disabled={!canScrollLeft}
          scrollLeftCaption={scrollLeftCaption}
          isRtl={isRtl}
        />
      )}
      <ItemsScrollWrapper
        space={space}
        ref={containerRef}
        horizontalEdgeGap={horizontalEdgeGap}
        hideScrollbar={hideScrollbar}
      >
        {generateItems(
          items,
          itemRef,
          isRtl === true,
          firstVisibleIndex,
          lastVisibleIndex
        )}
      </ItemsScrollWrapper>
      {scrollToRightButton ? (
        scrollToRightButton({
          scrollToStep: scrollRightToStep,
          disabled: !canScrollRight,
        })
      ) : (
        <DefaultScrollToRightButton
          onClick={scrollRightToStep}
          disabled={!canScrollRight}
          scrollRightCaption={scrollRightCaption}
          isRtl={isRtl}
        />
      )}
    </CarouselWrapper>
  );
};

export default Carousel;
