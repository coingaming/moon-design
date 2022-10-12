import React, { forwardRef, ReactNode } from 'react';
import classNames from '../utils/classnames';

type BodyTRProps = {
  reactTableProps?: any;
  onClick?: any;
  onHoverToggle?: (hover?: boolean) => void;
  depth?: number;
  withOffset?: boolean;
  isExpanded?: boolean;
  hasChildren?: boolean;
  hasParent?: boolean;
  isLastRow?: boolean;
  isLastNestedRow?: boolean;
  isSelected?: boolean | string;
  customBackground?: boolean;
  backgroundColor?: string;
  fontColor?: string;
  children?: ReactNode;
  selectable?: boolean;
  isHovered?: boolean;
};

const BodyTR = forwardRef<HTMLDivElement, BodyTRProps>(
  ({
    reactTableProps,
    onClick,
    onHoverToggle,
    withOffset,
    isExpanded,
    hasParent,
    isLastRow,
    isSelected,
    selectable,
    children,
    backgroundColor,
    fontColor,
    customBackground,
    depth = 0,
    isHovered,
  }) => {
    return (
      <div
        {...reactTableProps}
        className={classNames(
          'relative first:mt-0 focus-visible:outline-none flex rounded-moon-s-sm transition-colors text-bulma moon-text-14',
          withOffset ? 'mt-2' : 'mt-1',
          hasParent ? 'mt-0' : '',
          isExpanded ? 'first:rounded-bl-0 last:rounded-br-0' : '',
          isLastRow
            ? 'first:rounded-tl-0 first:rounded-bl-0 last:rounded-tl-0 last:rounded-br-0 after:mt-0'
            : '',
          isSelected
            ? 'text-popo bg-[#e0e0ed]/10'
            : fontColor
            ? `text-${fontColor}`
            : 'text-popo',
          (isSelected && !customBackground) || isHovered
            ? 'bg-[#e0e0ed] border-piccolo/10 cursor-pointer'
            : customBackground
            ? `bg-${backgroundColor} border-${backgroundColor}`
            : 'bg-gohan',
          selectable
            ? 'pl-2 text-bulma border-t-1 border-t-transparent border-b-1 border-b-transparent bg-[#e0e0ed]'
            : ''
        )}
        onMouseEnter={onHoverToggle ? () => onHoverToggle(true) : null}
        onMouseLeave={onHoverToggle ? () => onHoverToggle(false) : null}
        onClick={() => (onClick ? onClick() : null)}
      >
        {children}
      </div>
    );
  }
);

export default BodyTR;
