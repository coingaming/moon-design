import React, { useRef, useState } from "react";
import CarouselItem from "./private/CarouselItem";
import Controls from "./private/Controls";
import Header from "./private/Header";
import Indicator from "./private/Indicator";

export enum ItemGapEnum {
  '2xs' = '2xs',
  'xs' = 'xs',
  'sm' = 'sm',
  'md' = 'md',
  'lg' = 'lg'
}

const itemGapValues: {[key in ItemGapEnum]: number} = {
  '2xs': 8,
  'xs': 12,
  'sm': 16,
  'md': 24,
  'lg': 32
}

interface CarouselProps {
  items: React.ReactNode[];
  step?: number;
  renderItem?: (item: any) => React.ReactNode;
  itemGap?: ItemGapEnum | keyof typeof ItemGapEnum;
  horizontalPadding?: number;
  verticalPadding?: number;
  itemFullWidth?: boolean;
  containerClassName?: string;
  itemClassName?: string;
  indicatorClassName?: string;
  headerTitle?: string;
  headerDescription?: string;
  seeAllButton?: boolean;
  headerControls?: boolean;
  onSeeAllClick?: () => void;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  step = 1,
  renderItem,
  itemGap = 'xs',
  horizontalPadding = 3.5,
  verticalPadding = 3.5,
  itemFullWidth,
  containerClassName = '',
  itemClassName = '',
  indicatorClassName = '',
  headerTitle,
  headerDescription,
  seeAllButton,
  headerControls = false,
  onSeeAllClick
}) => {
  const [focusedItem, setFocusedItem] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const containerRef = useRef<HTMLUListElement>(null);

  const gap = itemGap ? itemGapValues[itemGap as ItemGapEnum] : 10;

  const shouldRenderHeader = headerTitle || headerDescription || seeAllButton || headerControls;

  const scrollStepToLeft = () => {
    if (containerRef.current && xPosition > 0) {
      const item = Array.from(containerRef.current.childNodes)[0] as HTMLElement;
      const newPosition = xPosition - (step * (item.offsetWidth + gap));

      setFocusedItem(focusedItem - step);
      setXPosition(newPosition);

      containerRef.current?.scrollTo({
        top: 0,
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollStepToRight = () => {
    if (containerRef.current && xPosition < containerRef.current.scrollWidth - containerRef.current.offsetWidth) {
      const item = Array.from(containerRef.current.childNodes)[0] as HTMLElement;
      const newPosition = xPosition + (step * (item.offsetWidth + gap));

      setFocusedItem(focusedItem + step);
      setXPosition(newPosition);

      containerRef.current?.scrollTo({
        top: 0,
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollIndicatorStep = (newFocusedItem: number) => {
    if (containerRef.current && xPosition < containerRef.current.scrollWidth - containerRef.current.offsetWidth) {
      const item = Array.from(containerRef.current.childNodes)[0] as HTMLElement;
      const newPosition = newFocusedItem * (item.offsetWidth + gap);

      setFocusedItem(newFocusedItem);
      setXPosition(newPosition);

      containerRef.current?.scrollTo({
        top: 0,
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full items-center bg-goku relative rounded-xl">
      <div
        className='overflow-hidden'
        style={!itemFullWidth ? { padding: `${verticalPadding}rem ${horizontalPadding}rem` } : {}}
      >
        {shouldRenderHeader && (<Header
          title={headerTitle}
          description={headerDescription}
          seeAllButton={seeAllButton}
          controls={headerControls}
          itemsCount={items.length}
          scrollLeft={scrollStepToLeft}
          scrollRight={scrollStepToRight}
          onSeeAllClick={onSeeAllClick}
        />)}

        {!headerControls && (<Controls
          scrollLeft={scrollStepToLeft}
          scrollRight={scrollStepToRight}
          horizontalOffset={horizontalPadding}
        />)}

        <ul
          ref={containerRef}
          className='w-full flex overflow-x-auto y-hidden relative snap-mandatory snap-x scrollbar-hidden'
        >
          {items.map((item, index) => {
            if(renderItem) {
              return renderItem(item);
            } else {
              return (
                <CarouselItem
                  key={index}
                  itemGap={gap}
                  fullWidth={itemFullWidth}
                  lastChild={index === items.length - 1}
                >
                  {item}
                </CarouselItem>
              )
            }
          })}
        </ul>
      </div>

      <Indicator
        activeIndex={focusedItem}
        itemsCount={items.length}
        verticalPadding={verticalPadding}
        onClick={scrollIndicatorStep}
      />
    </div>
  );
};

export default Carousel;
