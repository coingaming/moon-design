import React from 'react';
import classNames from '../../private/utils/classnames';
import RemoveIcon from './icons/RemoveIcon';
import Option from './types/OptionProps';

type OptionItemProps = {
  option: Option;
  onRemove: (e: React.MouseEvent) => void;
  selectSize: 'md' | 'lg' | 'xl';
  verticalMargins: boolean;
  className?: string;
}

const OptionItem: React.FC<OptionItemProps> = ({
    option, 
    onRemove, 
    selectSize, 
    verticalMargins, 
    className = ''
  }) => {
  const getPadding = () => {
    switch(selectSize) {
      case 'md':
        return 'pl-2 pr-1.5';
      case 'lg':
        return 'px-2 py-1';
      case 'xl':
        return 'pl-2 pr-1.5';
    }
  }

  return (
    <div className={classNames(
        'option-item mx-0.5 rounded text-moon-9 uppercase bg-piccolo flex justify-between items-center text-gohan',
        getPadding(),
        verticalMargins && 'my-0.5',
        className
      )}
    >
      <span className='mr-2 font-semibold'>{option.label}</span>
      <RemoveIcon 
        width={14} 
        height={14} 
        className="text-gohan" 
        onClick={(e: React.MouseEvent) => onRemove(e)}
      />
    </div>
  );
};

export default OptionItem;