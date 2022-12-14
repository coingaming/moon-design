import React, {
  createContext,
  useContext,
} from 'react';
import mergeClassnames from '../utils/mergeClassnames';
import withHorizontalScroll from './private/utils/withHorizontalScroll';

type CarouselState = {
  scrollTo?: any;
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
};

const CarouselRoot: React.FC<CarouselRootProps> = ({
  children,
  scrollTo,
  className,
  step,
}) => {
  const states = { scrollTo };

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

  return (
    <CarouselContext.Provider value={states}>
      <div className={mergeClassnames(className)}>
        { children }
      </div>
    </CarouselContext.Provider>
  );
};

type SubcomponentProps = {
  className?: string;
}

const Item: React.FC<SubcomponentProps> = ({
  children,
  className,
}) => {
  const { scrollTo } = useCarouselContext('Carousel.Item');
  return (
    <div className={mergeClassnames(className)}>
      {children}
    </div>
  );
};

const LeftArrow: React.FC<SubcomponentProps> = ({ children, className }) => {
  return (
    <div className={mergeClassnames(className)}>
      {children}
    </div>
  );
};

const RightArrow: React.FC<SubcomponentProps> = ({ children, className }) => {
  return (
    <div className={mergeClassnames(className)}>
      {children}
    </div>
  );
};

const Carousel = Object.assign(CarouselRoot, {
  LeftArrow,
  RightArrow,
  Item,
});

export default Carousel;
