import { Carousel, MenuItem } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [selected, setSelected] = useState(0);
  const items = Array.from({ length: 5 }, (index) => index);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-1">
        {items.map((_, index) => (
          <MenuItem key={index} isActive={selected === index} onClick={() => setSelected(index)} className="px-4">
            {index}
          </MenuItem>
        ))}
      </div>
      <Carousel step={1} selectedIndex={selected} className="w-[320px]">
        <Carousel.Reel className='overflow-x-hidden'>
          {items.map((_, index) => (
            <Carousel.Item key={index} className="w-80 h-48">
              {index}
            </Carousel.Item>
          ))}
        </Carousel.Reel>
      </Carousel>
    </div>
  );
};

export default Example;
