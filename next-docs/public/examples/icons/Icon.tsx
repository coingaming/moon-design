import React from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';

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
      className={mergeClassnames(
        'relative flex flex-col items-center text-sm cursor-pointer rounded-md hover:bg-active-80 hover:text-active',
        isShown ? 'text-active bg-active-80' : 'text-gray-400'
      )}
    >
      {children}
    </div>
  );
};

export default Icon;
