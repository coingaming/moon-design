import React, { Children, useEffect } from 'react';
import type CarouselRootProps from './private/types/CarouselRootProps';
import type SubcomponentProps from './private/types/SubcomponentProps';
import CarouselContext from './private/utils/CarouselContext';
import useCarouselContext from './private/utils/useCarouselContext';
import useInterval from './private/utils/useInterval';
import withHorizontalScroll from './private/utils/withHorizontalScroll';
import IconButton from '../iconButton/IconButton';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const CarouselRoot = ({
  children,
  scrollTo,
  className,
  step,
  selectedIndex,
  autoSlideDelay,
  isRtl,
  ...rest
}: CarouselRootProps) => {
  const {
    itemRef,
    scrollLeftToStep,
    scrollRightToStep,
    containerRef,
    canScrollLeft,
    canScrollRight,
    scrollToIndex,
    itemsCount,
    firstVisibleIndex,
    lastVisibleIndex,
  } = withHorizontalScroll({
    scrollStep: step || 5,
    scrollTo: scrollTo,
    scrollInContainer: true,
    isRtl,
  });

  useInterval(() => {
    if (!autoSlideDelay) return;
    if (isRtl) {
      if (canScrollLeft) {
        scrollLeftToStep();
      } else {
        scrollToIndex(itemsCount - 1);
      }
    } else {
      if (canScrollRight) {
        scrollRightToStep();
      } else {
        scrollToIndex(0);
      }
    }
  }, autoSlideDelay as number);

  useEffect(() => {
    if (selectedIndex !== undefined) {
      scrollToIndex(isRtl ? itemsCount - selectedIndex - 1 : selectedIndex);
    }
  }, [selectedIndex, isRtl, itemsCount]);

  return (
    <CarouselContext.Provider
      value={{
        itemRef,
        scrollLeftToStep,
        scrollRightToStep,
        canScrollLeft,
        canScrollRight,
        containerRef,
        selectedIndex,
        itemsCount,
        firstVisibleIndex,
        lastVisibleIndex,
        autoSlideDelay,
        isRtl,
      }}
    >
      <div className={mergeClassnames('relative w-full', className)} {...rest}>
        {typeof children === 'function'
          ? children({
              scrollLeftToStep,
              scrollRightToStep,
              canScrollLeft,
              canScrollRight,
              firstVisibleIndex,
              lastVisibleIndex,
            })
          : children}
      </div>
    </CarouselContext.Provider>
  );
};

const Reel = ({ children, className, ...rest }: SubcomponentProps) => {
  const { containerRef, autoSlideDelay, isRtl } =
    useCarouselContext('Carousel.Reel');
  const arrayChildren = Children.toArray(children);
  const revertChildren = arrayChildren.reverse();
  return (
    <ul
      className={mergeClassnames(
        'flex overflow-x-auto overflow-y-hidden h-auto hidden-scroll gap-4',
        '[-webkit-overflow-scrolling:touch] [scrollbar-width:none]',
        '[-ms-overflow-style:-ms-autohiding-scrollbar]',
        '[&>li]:list-none [&>li]:before:absolute [&>li]:before:content-["\\200B"]',
        '[&>*]:flex-[0_0_auto] [&>img]:h-full [&>img]:basis-auto [&>img]:w-auto',
        'snap-x snap-mandatory rtl:flex-row-reverse',
        autoSlideDelay && 'overflow-x-hidden',
        className
      )}
      ref={containerRef}
      {...rest}
    >
      {isRtl ? revertChildren : children}
    </ul>
  );
};

// TODO: highlight selected item (mark it as selected)
const Item = ({ children, className, ...rest }: SubcomponentProps) => {
  const { itemRef } = useCarouselContext('Carousel.Item');
  return (
    <li
      className={mergeClassnames(
        'snap-center flex bg-goku rounded-moon-s-sm items-center justify-center',
        className
      )}
      ref={itemRef}
      {...rest}
    >
      {children}
    </li>
  );
};

const LeftArrow = ({ children, className, ...rest }: SubcomponentProps) => {
  const { scrollLeftToStep = () => {}, canScrollLeft } =
    useCarouselContext('Carousel.LeftArrow');
  return (
    <IconButton
      size="sm"
      className={mergeClassnames(
        'max-sm:hidden shadow-moon-sm bg-goku text-bulma',
        'absolute top-1/2 -translate-y-1/2 origin-[top_center] z-5 -start-4',
        className
      )}
      onClick={scrollLeftToStep}
      disabled={!canScrollLeft}
      aria-label="Scroll left"
      {...rest}
    >
      {children}
    </IconButton>
  );
};

const RightArrow = ({ children, className, ...rest }: SubcomponentProps) => {
  const { scrollRightToStep = () => {}, canScrollRight } = useCarouselContext(
    'Carousel.RightArrow'
  );
  return (
    <IconButton
      size="sm"
      className={mergeClassnames(
        'max-sm:hidden shadow-moon-sm bg-goku text-bulma',
        'absolute top-1/2 -translate-y-1/2 origin-[top_center] z-5 -end-4',
        className
      )}
      onClick={scrollRightToStep}
      disabled={!canScrollRight}
      aria-label="Scroll right"
      {...rest}
    >
      {children}
    </IconButton>
  );
};

// TODO: add slide indicator timer
const Indicators = ({ className, ...rest }: SubcomponentProps) => {
  const {
    itemsCount,
    selectedIndex,
    firstVisibleIndex = 0,
    lastVisibleIndex = 0,
  } = useCarouselContext('Carousel.RightArrow');
  const activeIndex =
    !selectedIndex ||
    selectedIndex < firstVisibleIndex ||
    selectedIndex > lastVisibleIndex
      ? firstVisibleIndex
      : selectedIndex;
  const items = Array.from({ length: itemsCount ?? 0 }, (index) => index);
  return (
    <div
      className={mergeClassnames(
        'flex absolute bottom-8 left-1/2 -translate-x-1/2 rtl:flex-row-reverse',
        className
      )}
      {...rest}
    >
      {items?.map((_, index) => (
        <div
          className={mergeClassnames(
            'w-2 h-2 mx-1 rounded-full bg-beerus',
            activeIndex === index && 'bg-piccolo'
          )}
          key={index}
        />
      ))}
    </div>
  );
};

const Carousel = Object.assign(CarouselRoot, {
  Reel,
  LeftArrow,
  RightArrow,
  Item,
  Indicators,
});

export default Carousel;
