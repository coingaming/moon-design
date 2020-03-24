import * as React from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed';

export const THRESHOLD = 0.75;

type Options = {
  scrollStep?: number;
};

const findLastVisibleIndex = (childRefs: any[]): any => {
  const reversedIndex = childRefs
    // "reverse" mutates existing array, that's why we copy it via "slice"
    .slice()
    .reverse()
    .findIndex(child => child.getAttribute('visible'));
  const count = childRefs.length - 1;
  const finalIndex = reversedIndex >= 0 ? count - reversedIndex : reversedIndex;
  return finalIndex;
};

const findFirstVisibleIndex = (childRefs: any[]): any => {
  return childRefs.findIndex(child => child.getAttribute('visible'));
};

const scrollToIndex = (itemRef: HTMLElement, scrollIntoViewSmoothly: any) => {
  if (itemRef) {
    scrollIntoViewSmoothly(itemRef, {
      block: 'nearest',
      inline: 'nearest',
      behavior: 'smooth',
    });
  }
};

const scrollLeftToStep = (
  scrollStep: number,
  itemRefs: HTMLElement[],
  scrollIntoViewSmoothly: any
) => {
  const firstVisibleIndex = findFirstVisibleIndex(itemRefs);
  const actualScrollForIndex =
    firstVisibleIndex < scrollStep ? 0 : firstVisibleIndex - scrollStep;
  scrollToIndex(itemRefs[actualScrollForIndex], scrollIntoViewSmoothly);
};

const scrollRightToStep = (
  scrollStep: number,
  itemRefs: HTMLElement[],
  scrollIntoViewSmoothly: any
) => {
  const lastVisibleIndex = findLastVisibleIndex(itemRefs);
  const lastIndex = itemRefs.length - 1;
  const actualScrollForIndex =
    lastIndex - lastVisibleIndex < scrollStep
      ? lastIndex
      : lastVisibleIndex + scrollStep;
  scrollToIndex(itemRefs[actualScrollForIndex], scrollIntoViewSmoothly);
};

const showHideIndicator = (
  itemRefs: HTMLElement[],
  setLeftIndicator: (isShow: boolean) => void,
  setRightIndicator: (isShow: boolean) => void
) => {
  const firstVisibleIndex = findFirstVisibleIndex(itemRefs);
  const lastVisibleIndex = findLastVisibleIndex(itemRefs);
  if (lastVisibleIndex === -1 && firstVisibleIndex === -1) {
    setLeftIndicator(false);
    setRightIndicator(false);
  }
  lastVisibleIndex < itemRefs.length - 1
    ? setRightIndicator(true)
    : setRightIndicator(false);
  firstVisibleIndex > 0 ? setLeftIndicator(true) : setLeftIndicator(false);
};

export const withHorizontalScroll = (options: Options) => {
  const [leftIndicator, setLeftIndicator] = React.useState(false);
  const [rightIndicator, setRightIndicator] = React.useState(false);
  const containerRef = React.useRef(null);

  const { scrollStep } = options;
  const itemRefs: HTMLElement[] = [];
  let scrollIntoViewSmoothly: any = scrollIntoView;

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: any) => {
        entries.forEach((entry: any) => {
          entry.intersectionRatio >= THRESHOLD
            ? entry.target.setAttribute('visible', 'true')
            : entry.target.removeAttribute('visible');
          showHideIndicator(itemRefs, setLeftIndicator, setRightIndicator);
        });
      },
      {
        root: containerRef.current,
        threshold: THRESHOLD,
      }
    );

    itemRefs.forEach(item => {
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
    scrollLeftToStep: () =>
      scrollLeftToStep(scrollStep || 0, itemRefs, scrollIntoViewSmoothly),
    scrollRightToStep: () =>
      scrollRightToStep(scrollStep || 0, itemRefs, scrollIntoViewSmoothly),
    scrollToIndex: (index: number) =>
      scrollToIndex(itemRefs[index], scrollIntoViewSmoothly),
    canScrollLeft: leftIndicator,
    canScrollRight: rightIndicator,
  };
};

export default withHorizontalScroll;
