import React from 'react';
import ChevronIcon from './icons/ChevronIcon';

interface ControlsProps {
  scrollLeft: () => void;
  scrollRight: () => void;
  horizontalOffset?: number;
  header?: boolean;
  showLeft?: boolean;
  showRight?: boolean;
}

const Controls: React.FC<ControlsProps> = ({
  scrollLeft,
  scrollRight,
  horizontalOffset,
  header,
  showLeft,
  showRight
}) => {
  return (
    <>
      {showLeft && (<button
        onClick={scrollLeft}
        className={`d-flex items-center justify-center bg-gohan rounded-full cursor-pointer w-8 h-8 shadow-carousel-control-button shadow-xl outline-none z-10 ${!header && 'absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'} ${header && 'mr-1'}`}
        style={!header ? {left: `${horizontalOffset}rem`} : {}}
      >
        <ChevronIcon className="inline align-top rotate-180" width={24} />
      </button>)}
      {showRight && (<button
        onClick={scrollRight}
        className={`d-flex items-center justify-center bg-gohan rounded-full cursor-pointer w-8 h-8 shadow-carousel-control-button shadow-xl outline-none z-10 ${!header && 'absolute top-1/2 translate-x-1/2 -translate-y-1/2'}`}
        style={!header ? {right: `${horizontalOffset}rem`} : {}}
      >
        <ChevronIcon className='inline align-top' width={24} />
      </button>)}
    </>
  );
};

export default Controls;
