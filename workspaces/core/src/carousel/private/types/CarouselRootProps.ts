type CarouselRootProps = {
  scrollTo?: number;
  className?: string;
  step?: number;
  selectedIndex?: number;
  autoSlideDelay?: number;
  isRtl?: boolean;
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

export default CarouselRootProps;
