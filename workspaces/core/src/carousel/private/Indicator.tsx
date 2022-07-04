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
    <div className='absolute flex left-1/2 -translate-x-1/2 -bottom-6' style={{bottom: `${verticalPadding - 24}px`}}>
      {Array.from(Array(itemsCount).keys()).map((_, index) => (
        // beerus bg
        // trunks bg
        <div className={`w-2 h-2 z-[2] mr-2 rounded-full ${activeIndex === index ? 'bg-[#4E46B4]' : 'bg-[#999CA0]'}  transition-colors`}>

        </div>
      ))}
    </div>
  );
};

export default Indicator;