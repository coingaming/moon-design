import React, {
  createContext,
  RefObject,
  useContext,
} from 'react';
import mergeClassnames from '../utils/mergeClassnames';
import withHorizontalScroll from './private/utils/withHorizontalScroll';

type CarouselState = {
  itemRef?: RefObject<HTMLLIElement>;
  scrollLeftToStep?: () => void;
  scrollRightToStep?: () => void;
  canScrollLeft?: boolean;
  canScrollRight?: boolean;
  containerRef?: RefObject<HTMLUListElement>;
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
  } = withHorizontalScroll({ scrollStep: step || 5, scrollTo });

  React.useEffect(() => {
    if (!selectedIndex) {
      return;
    }
    scrollToIndex(selectedIndex);
  }, []);

  return (
    <CarouselContext.Provider value={{itemRef, scrollLeftToStep, scrollRightToStep, canScrollLeft, canScrollRight, containerRef}}>
      <div className={mergeClassnames('relative w-full', className)}>
        { typeof children === 'function' ? children({scrollLeftToStep, scrollRightToStep}) : children }
      </div>
    </CarouselContext.Provider>
  );
};

type SubcomponentProps = {
  className?: string;
}

const Reel: React.FC<SubcomponentProps> = ({
  children,
  className,
}) => {
  const { containerRef } = useCarouselContext('Carousel.Reel');
  return (
    <ul className={mergeClassnames(
      'flex overflow-x-auto overflow-y-hidden h-auto hidden-scroll',
      '[-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:-ms-autohiding-scrollbar]',
      '[&>li]:list-none [&>li]:before:absolute [&>li]:before:content-["\\200B"]',
      '[&>*]:flex-[0_0_auto] [&>img]:h-full [&>img]:basis-auto [&>img]:w-auto',
      'rtl:[&>*+*]:mr-4 ltr:[&>*+*]:ml-4',
      'snap-mandatory',
      className,
    )}
      ref={containerRef}
    >
      { children }
    </ul>
  );
};

const Item: React.FC<SubcomponentProps> = ({
  children,
  className,
}) => {
  const { itemRef } = useCarouselContext('Carousel.Item');
  return (
    <li className={mergeClassnames('snap-center', className)} ref={itemRef}>
      {children}
    </li>
  );
};

type ControlProps = {
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}

const CarouselControl: React.FC<ControlProps> = ({ children, className, onClick, disabled }) => {
  return (
    <button className={mergeClassnames(
      'max-sm:hidden p-2 align-middle border shadow-moon-sm border-beerus rounded-full bg-gohan text-trunks text-[8px] leading-[0] no-underline cursor-pointer absolute top-1/2 -translate-y-1/2 origin-[top center] z-5',
      'disabled:opacity-moon disabled:cursor-not-allowed',
      className,
    )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const LeftArrow: React.FC<SubcomponentProps> = ({ children, className }) => {
  const { scrollLeftToStep = () => {}, canScrollLeft } = useCarouselContext('Carousel.LeftArrow');
  return (
    <CarouselControl className={mergeClassnames('rtl:right-[-0.875px] ltr:left[-0.875px] rtl:[&_svg]:rotate-180', className)} onClick={scrollLeftToStep} disabled={!canScrollLeft}>
      { children }
    </CarouselControl>
  );
};

const RightArrow: React.FC<SubcomponentProps> = ({ children, className }) => {
  const { scrollRightToStep = () => {}, canScrollRight } = useCarouselContext('Carousel.RightArrow');
  return (
    <CarouselControl className={mergeClassnames('rtl:left-[-0.875px] rtl:right-auto ltr:right-[-0.875px] ltr:left-auto rtl:[&_svg]:rotate-180', className)} onClick={scrollRightToStep} disabled={!canScrollRight}>
      { children }
    </CarouselControl>
  );
};

const Carousel = Object.assign(CarouselRoot, {
  Reel,
  LeftArrow,
  RightArrow,
  Item,
});

export default Carousel;
