import React, { createContext, RefObject, useContext } from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import useInterval from './private/utils/useInterval';
import withHorizontalScroll from './private/utils/withHorizontalScroll';

type CarouselState = {
  itemRef?: (element: HTMLLIElement) => void;
  scrollLeftToStep?: () => void;
  scrollRightToStep?: () => void;
  canScrollLeft?: boolean;
  canScrollRight?: boolean;
  containerRef?: RefObject<HTMLUListElement>;
  selectedIndex?: number;
  itemsCount?: number;
  firstVisibleIndex?: number;
  lastVisibleIndex?: number;
  autoSlideDelay?: number;
};

const CarouselContext = createContext<CarouselState>({});
CarouselContext.displayName = 'CarouselContext';

const useCarouselContext = (component: string) => {
  const context = useContext(CarouselContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Carousel /> component.`
    );
    throw err;
  }
  return context;
};

type CarouselRootProps = {
  scrollTo?: number;
  className?: string;
  step?: number;
  selectedIndex?: number;
  autoSlideDelay?: number;
  children?:
    | React.ReactNode
    | ((data: {
        scrollLeftToStep?: () => void;
        scrollRightToStep?: () => void;
        canScrollLeft?: boolean;
        canScrollRight?: boolean;
        firstVisibleIndex?: number;
        lastVisibleIndex?: number;
      }) => React.ReactElement);
};

const CarouselRoot: React.FC<CarouselRootProps> = ({
  children,
  scrollTo,
  className,
  step,
  selectedIndex,
  autoSlideDelay,
}) => {
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
    scrollTo,
    scrollInContainer: true,
  });

  if (autoSlideDelay) {
    useInterval(() => {
      if (canScrollRight) {
        scrollRightToStep();
      } else {
        scrollToIndex(0);
      }
    }, autoSlideDelay);
  }

  React.useEffect(() => {
    if (selectedIndex !== undefined) {
      scrollToIndex(selectedIndex);
    }
  }, [selectedIndex]);

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
      }}
    >
      <div className={mergeClassnames('relative w-full', className)}>
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

type SubcomponentProps = {
  className?: string;
  children?: React.ReactNode;
};

const Reel: React.FC<SubcomponentProps> = ({ children, className }) => {
  const { containerRef, autoSlideDelay } = useCarouselContext('Carousel.Reel');
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
    >
      {children}
    </ul>
  );
};

// TODO: highlight selected item (mark it as selected)
const Item: React.FC<SubcomponentProps> = ({ children, className }) => {
  const { itemRef } = useCarouselContext('Carousel.Item');
  return (
    <li
      className={mergeClassnames(
        'snap-center flex bg-gohan rounded-moon-s-sm items-center justify-center',
        className
      )}
      ref={itemRef}
    >
      {children}
    </li>
  );
};

type ControlProps = {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
};

const CarouselControl: React.FC<ControlProps> = ({
  children,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={mergeClassnames(
        'max-sm:hidden p-1 align-middle shadow-moon-sm rounded-full bg-gohan text-trunks',
        'text-moon-24 no-underline cursor-pointer absolute top-1/2 -translate-y-1/2',
        'origin-[top_center] z-5 disabled:opacity-moon disabled:cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const LeftArrow: React.FC<SubcomponentProps> = ({ children, className }) => {
  const { scrollLeftToStep = () => {}, canScrollLeft } =
    useCarouselContext('Carousel.LeftArrow');
  return (
    <CarouselControl
      className={mergeClassnames('-left-3', className)}
      onClick={scrollLeftToStep}
      disabled={!canScrollLeft}
    >
      {children}
    </CarouselControl>
  );
};

const RightArrow: React.FC<SubcomponentProps> = ({ children, className }) => {
  const { scrollRightToStep = () => {}, canScrollRight } = useCarouselContext(
    'Carousel.RightArrow'
  );
  return (
    <CarouselControl
      className={mergeClassnames('-right-3 left-auto', className)}
      onClick={scrollRightToStep}
      disabled={!canScrollRight}
    >
      {children}
    </CarouselControl>
  );
};

// TODO: add slide indicator timer
const Indicators: React.FC<SubcomponentProps> = ({ className }) => {
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
