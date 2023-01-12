import React, { createContext, RefObject, useContext } from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
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
};

// TODO: add auto slide with slide indicator timer
const CarouselRoot: React.FC<CarouselRootProps> = ({
  children,
  scrollTo,
  className,
  step,
  selectedIndex,
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
  } = withHorizontalScroll({ scrollStep: step || 5, scrollTo });

  React.useEffect(() => {
    if (!selectedIndex) {
      return;
    }
    scrollToIndex(selectedIndex);
  }, []);

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
};

const Reel: React.FC<SubcomponentProps> = ({ children, className }) => {
  const { containerRef } = useCarouselContext('Carousel.Reel');
  return (
    <ul
      className={mergeClassnames(
        'flex overflow-x-auto overflow-y-hidden h-auto hidden-scroll gap-4',
        '[-webkit-overflow-scrolling:touch] [scrollbar-width:none]',
        '[-ms-overflow-style:-ms-autohiding-scrollbar]',
        '[&>li]:list-none [&>li]:before:absolute [&>li]:before:content-["\\200B"]',
        '[&>*]:flex-[0_0_auto] [&>img]:h-full [&>img]:basis-auto [&>img]:w-auto',
        'snap-x snap-mandatory',
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
        'snap-center flex bg-gohan rounded-moon-i-sm items-center justify-center',
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
<<<<<<< HEAD
        'max-sm:hidden p-2 align-middle shadow-moon-sm rounded-full bg-gohan',
        'text-trunks text-[8px] leading-[0] no-underline cursor-pointer absolute top-1/2 -translate-y-1/2 origin-[top center] z-5',
        'disabled:opacity-moon disabled:cursor-not-allowed',
=======
        'max-sm:hidden p-2 align-middle shadow-moon-sm rounded-full bg-gohan text-trunks',
        'text-[8px] leading-[0] no-underline cursor-pointer absolute top-1/2 -translate-y-1/2',
        'origin-[top center] z-5 disabled:opacity-moon disabled:cursor-not-allowed',
>>>>>>> origin/develop
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
      className={mergeClassnames(
        'rtl:-right-3 ltr:-left-3 rtl:[&_svg]:rotate-180',
        className
      )}
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
      className={mergeClassnames(
        'rtl:-left-3 rtl:right-auto ltr:-right-3 ltr:left-auto rtl:[&_svg]:rotate-180',
        className
      )}
      onClick={scrollRightToStep}
      disabled={!canScrollRight}
    >
      {children}
    </CarouselControl>
  );
};

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
        'flex absolute bottom-8 left-1/2 -translate-x-1/2',
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
