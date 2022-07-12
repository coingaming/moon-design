import React from "react";

interface CarouselItemProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  itemGap?: number;
  lastChild: boolean;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  fullWidth,
  children,
  itemGap = 10,
  lastChild,
}) => {
  return (
    <div
      className={`${fullWidth ? "basis-full" : ""} items-center justify-center last:mr-0 bg-white`}
      style={{marginRight: lastChild ? '0px' : `${itemGap}px`}}
    >
      {children}
    </div>
  );
};

export default CarouselItem;

//calc((100% - (${itemsToShow - 1} * ${itemGap}px)) / ${itemsToShow})
