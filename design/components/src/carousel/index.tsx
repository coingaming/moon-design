import * as React from 'react';
import { CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';

import { listItemStyleTypeNone } from '@heathmont/sportsbet-objects';
import { border, colors } from '@heathmont/sportsbet-tokens';

/**
 * If a browser supports the new scroll snap specification, use the styles
 * and disable legacy spec (keyed with 👴)
 */
const currentScrollingSpec = `@supports (scroll-snap-align: start)`;

export const Carousel = styled.div({
  position: 'relative',
  width: '100%',
});

export const CarouselScroll = styled.ul({
  display: 'block',
  verticalAlign: 'top',
  overflowX: 'auto',
  overflowY: 'hidden',
  width: '100%',
  height: '100%',
  whiteSpace: 'nowrap',
  WebkitOverflowScrolling: 'touch',
  /** Hide Scrollbars on browsers that don't support custom scrollbars */
  scrollbarWidth: 'none',
  /* Auto-hide scrollbars on IE/Edge */
  '-ms-overflow-style': '-ms-autohiding-scrollbar',
  /* Custom Chrome Scroll Behaviour */
  '::-webkit-scrollbar': {
    width: 12,
    height: 12,
    cursor: 'pointer',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent',
    borderRadius: border.radius.largest,
    border: `${3}px solid ${colors.neutral[90]}`,
  },
  ':hover::-webkit-scrollbar-thumb': {
    backgroundColor: colors.neutral[40],
  },
  /* Scroll Snapping */
  scrollSnapType: 'mandatory',
  scrollSnapDestination: '0 50%',
  scrollSnapPointsX: 'repeat(100%)',
  [currentScrollingSpec]: {
    scrollSnapType: 'x mandatory',
    scrollSnapDestination: 'unset' /* 👴 */,
    scrollSnapPointsX: 'unset' /* 👴 */,
  },
});

type inlineStyle = CSSObject;

type CarouselScrollItemProps = {
  inlineStyle?: inlineStyle;
};

export const CarouselScrollItem = styled.li<CarouselScrollItemProps>(
  ({ inlineStyle }) => [
    {
      ...listItemStyleTypeNone,
      display: 'inline-block',
      verticalAlign: 'top',
      scrollSnapCoordinate: '0 0',
      [currentScrollingSpec]: {
        scrollSnapAlign: 'center',
        scrollSnapCoordinate: 'unset' /* 👴 */,
      },
    },
    inlineStyle,
  ]
);

const transformCenter = 'translateY(-50%)';

export const CarouselControl = styled.button({
  background: 'white',
  borderRadius: border.radius.largest,
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: transformCenter,
  transformOrigin: 'top center',
  zIndex: 2,
  '&:last-child': {
    left: 'auto',
    right: 0,
    transform: `rotate(180deg) ${transformCenter}`,
  },
});

export const CarouselControlCaption = styled.span(hideVisually);

/** *****************************************************************************
 * HOC for sportsbet-client-lib
 */
import { IconChevronLeft } from '@heathmont/sportsbet-icons/lib/svg/IconChevronLeft';

type CarouselSliderProps = {
  activeItem?: number;
  showIndicators?: boolean;
  items: Array<any>;
  itemStyle?: inlineStyle;
};

export class CarouselSlider extends React.Component<CarouselSliderProps> {
  selectedChildRef: any = null;

  constructor(props: CarouselSliderProps) {
    super(props);
    this.setSelectedChildRef = this.setSelectedChildRef.bind(this);
  }

  componentDidMount() {
    // Calling a function on the Child DOM element
    this.selectedChildRef && this.selectedChildRef.scrollIntoView();
  }

  setSelectedChildRef(input: any) {
    this.selectedChildRef = input;
  }

  render() {
    const {
      items,
      itemStyle,
      activeItem,
      showIndicators,
      ...rest
    } = this.props;
    return (
      <Carousel {...rest}>
        {showIndicators && (
          <CarouselControl>
            <CarouselControlCaption>Scroll Left</CarouselControlCaption>
            <IconChevronLeft />
          </CarouselControl>
        )}
        <CarouselScroll>
          {items.map((item, index) => (
            <CarouselScrollItem
              inlineStyle={itemStyle}
              ref={element => {
                const active =
                  element &&
                  element.firstElementChild &&
                  element.firstElementChild.classList.contains('active');
                if (activeItem === index || active) {
                  this.setSelectedChildRef(element);
                }
              }}
            >
              {item}
            </CarouselScrollItem>
          ))}
        </CarouselScroll>
        {showIndicators && (
          <CarouselControl>
            <CarouselControlCaption>Scroll Right</CarouselControlCaption>
            <IconChevronLeft />
          </CarouselControl>
        )}
      </Carousel>
    );
  }
}
