import React, {ReactNode} from 'react';
import {ColorNames} from '@heathmont/moon-themes-tw';
import classNames from '../utils/classnames';

type BodyTRProps = {
  onClick?: () => void;
  depth?: number;
  withOffset?: boolean;
  isExpanded?: boolean;
  hasChildren?: boolean;
  hasParent?: boolean;
  isLastRow?: boolean;
  isLastNestedRow?: boolean;
  isSelected?: boolean;
  customBackground?: boolean;
  backgroundColor?: ColorNames;
  fontColor?: ColorNames;
  children?: ReactNode;
  selectable?: boolean;
};

const BodyTR: React.FC<BodyTRProps> = ({
  onClick,
  withOffset,
  isExpanded,
  hasChildren,
  hasParent,
  isLastNestedRow,
  isLastRow,
  isSelected,
  selectable,
  children,
  backgroundColor,
  fontColor,
  customBackground,
  depth = 0,
}) => {
  return (
    <div
      className={classNames(
        'relative first:mt-0 focus-visible:outline-none flex gap-4 rounded-moon-s-sm bg-gohan transition-colors text-bulma moon-text-14 pl-1',
        withOffset ? 'mt-2' : 'mt-1',
        hasParent ? 'mt-0' : '',
        isExpanded ? 'first:rounded-bl-0 last:rounded-br-0' : '',
        isLastRow
          ? 'first:rounded-tl-0 first:rounded-bl-0 last:rounded-tl-0 last:rounded-br-0 after:mt-0'
          : '',
        onClick ? 'hover:cursor-pointer hover:bg-piccolo/10' : '',
        isSelected ? 'text-popo bg-piccolo/10' : fontColor ? 'text-popo' : '',
        isSelected && !customBackground
          ? 'bg-piccolo/10 border-piccolo/10'
          : `bg-${backgroundColor} border-${backgroundColor}`,
        selectable &&
          'pl-2 text-bulma border-t-1 border-t-transparent border-b-1 border-b-transparent bg-piccolo/10'
      )}
    >
      {children}
    </div>
  );
};

export default BodyTR;
