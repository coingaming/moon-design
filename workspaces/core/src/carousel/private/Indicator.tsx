import React from 'react';

interface IndicatorProps {
  activeIndex: number;
  itemsCount: number;
  verticalPadding: number;
}

const Indicator: React.FC<IndicatorProps> = ({
  activeIndex,
  itemsCount,
  verticalPadding
}) => {
  return (
    <div
      className='absolute flex left-1/2 -translate-x-1/2 translate-y-1/2'
      style={{ bottom: `${verticalPadding / 2}rem`}}
    >
      {Array.from(Array(itemsCount).keys()).map((_, index) => (<div
        className={`w-2 h-2 z-[2] mr-2 rounded-full ${
          activeIndex === index ? 'bg-piccolo' : 'bg-trunks'
        } transition-colors`}
      />))}
    </div>
  );
};

export default Indicator;
