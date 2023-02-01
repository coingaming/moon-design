import React from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed';

export const THRESHOLD = 0.75;

type Options = {
  scrollStep?: number;
  scrollInContainer?: boolean;
  scrollTo?: number;
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
  setLastVisibleIndex: (index: number) => void
) => {
  const firstVisibleIndex = findFirstVisibleIndex(itemRefs);
  const lastVisibleIndex = findLastVisibleIndex(itemRefs);
  setFirstVisibleIndex(firstVisibleIndex);
  setLastVisibleIndex(lastVisibleIndex);
  lastVisibleIndex < itemRefs.length - 1
    ? setRightIndicator(true)
    : setRightIndicator(false);
  firstVisibleIndex > 0 ? setLeftIndicator(true) : setLeftIndicator(false);
  if (firstVisibleIndex === -1) {
    itemRefs.length > 0 ? setLeftIndicator(true) : setLeftIndicator(false);
  }
  if (lastVisibleIndex === -1) {
    itemRefs.length > 0 ? setRightIndicator(true) : setRightIndicator(false);
  }
};

export const withHorizontalScroll = (options: Options): any => {
  const [leftIndicator, setLeftIndicator] = React.useState(false);
  const [rightIndicator, setRightIndicator] = React.useState(false);
  const [firstVisibleIndex, setFirstVisibleIndex] = React.useState(-1);
  const [lastVisibleIndex, setLastVisibleIndex] = React.useState(-1);
  const [itemsCount, setItemsCount] = React.useState(0);
  const containerRef = React.useRef(null);

  const { scrollStep, scrollInContainer, scrollTo } = options;

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
            setLastVisibleIndex
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

    return () =>
      itemRefs.forEach((item) => {
        observer.unobserve(item);
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
    setItemsCount(itemRefs.length);
  };

  React.useEffect(() => {
    if (!scrollTo || !itemRefs.length) {
      return;
    }
    // We scroll for another extra item because we defined our THRESHOLD = 0.75;
    // It means that item will be visible for 75%.
    // We scroll one more to guarantee 100% visibility.
    // "items.length - 1" because indices start from 0.
    if (scrollTo && scrollTo < itemRefs.length - 1) {
      scrollToIndex(
        itemRefs[scrollTo + 1],
        scrollIntoViewSmoothly,
        scrollInContainer && containerRef && containerRef.current
      );
    }
    // No point for scroll another extra item because that's the last one
    if (scrollTo && scrollTo === itemRefs.length - 1) {
      scrollToIndex(
        itemRefs[scrollTo],
        scrollIntoViewSmoothly,
        scrollInContainer && containerRef && containerRef.current
      );
    }
  }, []);

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
        scrollInContainer && containerRef && containerRef.current
      ),
    scrollRightToStep: () =>
      scrollRightToStep(
        scrollStep || 0,
        itemRefs,
        scrollIntoViewSmoothly,
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
    itemsCount,
  };
};

export default withHorizontalScroll;
