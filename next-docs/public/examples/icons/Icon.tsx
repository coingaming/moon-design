import React from 'react';
import classNames from '../../../utils/classNames';

export interface IconProps {
  name: string;
  onClick: (v: string) => void;
  selectedIcons: string[];
}

const Icon: React.FC<IconProps> = ({
  children,
  name,
  onClick,
  selectedIcons,
}) => {
  const isShown = selectedIcons.includes(name);
  return (
    <div
      onClick={() => onClick(name)}
      className={classNames(
        isShown ? 'text-active bg-active-80' : 'text-gray-400',
        'relative flex flex-col items-center text-sm cursor-pointer rounded-md hover:bg-active-80 hover:text-active'
      )}
    >
      {children}
    </div>
  );
};

export default Icon;
