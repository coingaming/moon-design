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
  horizontalPadding = 50,
  verticalPadding = 50,
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

  console.log(xPosition, containerRef.current?.scrollWidth);

  return (
    //goku bg
    <div className="w-full items-center bg-[#F5F5F5] relative rounded-xl">
      <div style={!itemFullWidth ? {
          padding: `${verticalPadding}px ${horizontalPadding}px ${verticalPadding}px ${horizontalPadding}px`,
        } : {}}
      >
        {shouldRenderHeader && (
          <Header 
            title={headerTitle}
            description={headerDescription}
            seeAllButton={seeAllButton}
            controls={headerControls}
            itemsCount={items.length}
            scrollLeft={scrollStepToLeft}
            scrollRight={scrollStepToRight}
            onSeeAllClick={onSeeAllClick}
          />
        )}

        <ul
          ref={containerRef}
          className={`w-full flex overflow-x-hidden relative`}
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
      />

      {!headerControls && (
        <Controls
          scrollLeft={scrollStepToLeft}
          scrollRight={scrollStepToRight}
          horizontalOffset={gap}
        />
      )}
    </div>
  );
};

export default Carousel;