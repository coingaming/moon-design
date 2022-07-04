import React from 'react';
import Controls from './Controls';

interface HeaderProps {
  title?: string;
  description?: string;
  seeAllButton?: boolean;
  controls: boolean;
  itemsCount: number;
  scrollLeft: () => void;
  scrollRight: () => void;
  onSeeAllClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  description,
  seeAllButton,
  controls,
  itemsCount,
  scrollRight,
  scrollLeft,
  onSeeAllClick
}) => {
  return (
    <div className="flex justify-between mb-6">
      <div className='flex flex-col mr-6'>
        {title && (
          <h2 className="text-xl font-bold mb-1">{title}</h2>
        )}
        {description && (
          //trunks color
          <p className='text-sm text-[#999CA0]'>{description}</p>
        )}
      </div>

      <div className='flex items-end'>
        {(seeAllButton || controls) && (
          <div className='flex items-center w-44'>
            {seeAllButton && (
              <button 
                className={`${controls ? 'mr-6' : ''} underline font-bold text-sm`} 
                onClick={onSeeAllClick}
              >
                {`See all (${itemsCount})`}
              </button>
            )}
            {controls && (
              <Controls 
                scrollLeft={scrollLeft}
                scrollRight={scrollRight}
                header
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;