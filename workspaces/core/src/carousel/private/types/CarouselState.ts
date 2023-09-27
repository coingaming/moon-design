import { RefObject } from 'react';

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
  isRtl?: boolean;
};

export default CarouselState;
