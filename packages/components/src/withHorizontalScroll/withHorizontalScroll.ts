import React from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed';

export const THRESHOLD = 0.75;

type Options = {
  scrollStep?: number;
  scrollInContainer?: boolean;
  isRtl?: boolean;
};

const findLastVisibleIndex = (childRefs: any[]): any => {
  const reversedIndex = childRefs
    // "reverse" mutates existing array, that's why we copy it via "slice"
    .slice()
    .reverse()
    .findIndex((child) => child.getAttribute('visible'));
  const count = childRefs.length - 1;
  const finalIndex = reversedIndex >= 0 ? count - reversedIndex : reversedIndex;
  return finalIndex;
};

const findFirstVisibleIndex = (childRefs: any[]): any => {
  return childRefs.findIndex((child) => child.getAttribute('visible'));
};

const scrollToIndex = (
  itemRef: HTMLElement,
  scrollIntoViewSmoothly: any,
  containerRef?: any,
  scrollStep?: number
) => {
  if (itemRef) {
    scrollIntoViewSmoothly(itemRef, {
      block: 'nearest',
      inline: scrollStep === 1 ? 'center' : 'nearest',
      behavior: 'smooth',
      boundary: containerRef,
    });
  }
};

const scrollLeftToStep = (
  scrollStep: number,
  itemRefs: HTMLElement[],
  scrollIntoViewSmoothly: any,
  isRtl: boolean,
  containerRef?: any
) => {
  const actualScrollForIndex = calculateActualScrollForIndex(
    itemRefs,
    scrollStep,
    true
  );
  scrollToIndex(
    itemRefs[actualScrollForIndex],
    scrollIntoViewSmoothly,
    containerRef,
    scrollStep
  );
};

const scrollRightToStep = (
  scrollStep: number,
  itemRefs: HTMLElement[],
  scrollIntoViewSmoothly: any,
  isRtl: boolean,
  containerRef?: any
) => {
  const actualScrollForIndex = calculateActualScrollForIndex(
    itemRefs,
    scrollStep,
    false
  );
  scrollToIndex(
    itemRefs[actualScrollForIndex],
    scrollIntoViewSmoothly,
    containerRef,
    scrollStep
  );
};

const calculateActualScrollForIndex = (
  itemRefs: HTMLElement[],
  scrollStep: number,
  toLeft: boolean
) => {
  if (toLeft) {
    const firstVisibleIndex = findFirstVisibleIndex(itemRefs);
    const actualScrollForIndex =
      firstVisibleIndex < scrollStep ? 0 : firstVisibleIndex - scrollStep;
    return actualScrollForIndex;
  }
  const lastVisibleIndex = findLastVisibleIndex(itemRefs);
  const lastIndex = itemRefs.length - 1;
  const actualScrollForIndex =
    lastIndex - lastVisibleIndex < scrollStep
      ? lastIndex
      : lastVisibleIndex + scrollStep;
  return actualScrollForIndex;
};

const showHideIndicator = (
  itemRefs: HTMLElement[],
  setLeftIndicator: (isShow: boolean) => void,
  setRightIndicator: (isShow: boolean) => void,
  setFirstVisibleIndex: (index: number) => void,
  setLastVisibleIndex: (index: number) => void,
  isRtl: boolean
) => {
  const firstVisibleIndex = findFirstVisibleIndex(itemRefs);
  const lastVisibleIndex = findLastVisibleIndex(itemRefs);
  setFirstVisibleIndex(firstVisibleIndex);
  setLastVisibleIndex(lastVisibleIndex);
  if (lastVisibleIndex === -1 && firstVisibleIndex === -1) {
    setLeftIndicator(false);
    setRightIndicator(false);
  }
  lastVisibleIndex < itemRefs.length - 1
    ? setRightIndicator(true)
    : setRightIndicator(false);
  firstVisibleIndex > 0 ? setLeftIndicator(true) : setLeftIndicator(false);
};

export const withHorizontalScroll = (options: Options): any => {
  const [leftIndicator, setLeftIndicator] = React.useState(false);
  const [rightIndicator, setRightIndicator] = React.useState(false);
  const [firstVisibleIndex, setFirstVisibleIndex] = React.useState(-1);
  const [lastVisibleIndex, setLastVisibleIndex] = React.useState(-1);
  const containerRef = React.useRef(null);

  const { scrollStep, scrollInContainer, isRtl } = options;

  const itemRefs: HTMLElement[] = [];
  let scrollIntoViewSmoothly: any = scrollIntoView;

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: any) => {
        entries.forEach((entry: any) => {
          entry.intersectionRatio >= THRESHOLD
            ? entry.target.setAttribute('visible', 'true')
            : entry.target.removeAttribute('visible');
          showHideIndicator(
            itemRefs,
            setLeftIndicator,
            setRightIndicator,
            setFirstVisibleIndex,
            setLastVisibleIndex,
            isRtl === true
          );
        });
      },
      {
        root: containerRef.current,
        threshold: THRESHOLD,
      }
    );

    itemRefs.forEach((item) => {
      observer.observe(item);
    });
  }, []);

  React.useEffect(() => {
    if (document) {
      scrollIntoViewSmoothly =
        'scrollBehavior' in document.documentElement.style
          ? scrollIntoView
          : smoothScrollIntoView;
    }
  });

  const itemRef = (element: HTMLElement) => {
    if (!element) {
      return;
    }
    itemRefs.push(element);
  };

  return {
    itemRef,
    containerRef,
    firstVisibleIndex,
    lastVisibleIndex,
    scrollLeftToStep: () =>
      scrollLeftToStep(
        scrollStep || 0,
        itemRefs,
        scrollIntoViewSmoothly,
        isRtl === true,
        scrollInContainer && containerRef && containerRef.current
      ),
    scrollRightToStep: () =>
      scrollRightToStep(
        scrollStep || 0,
        itemRefs,
        scrollIntoViewSmoothly,
        isRtl === true,
        scrollInContainer && containerRef && containerRef.current
      ),
    scrollToIndex: (index: number) =>
      scrollToIndex(
        itemRefs[index],
        scrollIntoViewSmoothly,
        scrollInContainer && containerRef && containerRef.current
      ),
    canScrollLeft: leftIndicator,
    canScrollRight: rightIndicator,
  };
};

export default withHorizontalScroll;
