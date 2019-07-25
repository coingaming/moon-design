/**
 * To be moved to Sportsbet-User-App
 */
import * as React from 'react';
import { IconChevronLeft } from '@heathmont/sportsbet-icons/lib/svg/IconChevronLeft';
import { Carousel, CarouselScroll, CarouselScrollItem } from './carousel';
import { CarouselControl, CarouselControlCaption } from './control';
import { CarouselInlineStyle } from './types';

type CarouselSliderProps = {
  activeItem?: number;
  showIndicators?: boolean;
  items: Array<any>;
  itemStyle?: CarouselInlineStyle;
  controlStyle?: CarouselInlineStyle;
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
      controlStyle,
      activeItem,
      showIndicators,
      ...rest
    } = this.props;
    return (
      <Carousel {...rest}>
        {showIndicators && (
          <CarouselControl inlineStyle={controlStyle}>
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
