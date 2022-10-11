import React, { forwardRef, ReactNode } from 'react';
import { TableVariant } from '../func/Table';
import classNames from '../utils/classnames';

type TDProps = {
  reactTableProps?: any;
  selectable?: boolean;
  isExpanded?: boolean;
  isLastRow?: boolean;
  hasParent?: boolean;
  isSelected?: boolean;
  customBackground?: boolean;
  backgroundColor?: string;
  fontColor?: string;
  children?: ReactNode;
  stickySide?: string;
  isFirstColumn?: boolean;
  isLastColumn?: boolean;
  isHovered?: boolean;
  variant?: TableVariant;
  headerBackgroundColor?: string;
};

const TD = forwardRef<HTMLDivElement, TDProps>(
  ({
    reactTableProps,
    isExpanded,
    isSelected,
    fontColor,
    customBackground,
    backgroundColor,
    isLastRow,
    hasParent,
    selectable,
    children,
    stickySide,
    isFirstColumn,
    isLastColumn,
    isHovered,
    variant,
    headerBackgroundColor,
  }) => {
    return (
      <div
        {...reactTableProps}
        className={classNames(
          'p-3 pr-1 relative box-border py-4 justify-between items-center w-full text-start -mt-1 ',
          isFirstColumn ? 'rounded-l-lg' : '',
          isLastColumn
            ? 'rounded-r-lg'
            : 'after:content-[""] after:absolute after:w-[1px] after:bg-beerus after:h-3/5 after:bottom-[20%] after:right-0 after:translate-x-[-50%]',
          isExpanded ? 'first:rounded-bl-lg last:rounded-br-lg after:hidden' : '',
          isLastRow
            ? 'first:rounded-tl-0 first:rounded-bl-0 last:rounded-tl-0 last:rounded-br-0'
            : '',
          isLastRow && hasParent ? 'first:rounded-tl-0 last:rounded-tr-0' : '',
          isLastRow && !isExpanded
            ? 'first:rounded-bl-2 last:rounded-br-2'
            : '',
          isSelected
            ? 'text-popo'
            : fontColor
            ? `text-${fontColor}`
            : 'text-popo',
          stickySide === 'right'
            ? 'before:content-[""] before:absolute before:w-px before:bg-beerus before:h-[70%] before:bottom-[15%] before:left-0 before:-margin-l-2'
            : '',
          (isSelected && !customBackground) || isHovered
            ? 'bg-[#e0e0ed] border-piccolo cursor-pointer'
            : customBackground
            ? `bg-${backgroundColor} border-${backgroundColor}`
            : 'bg-gohan',
          selectable &&
            'pl-2 text-bulma border-t-1 border-t-transparent border-b-1 border-b-transparent',
          variant === 'calendar' &&
            `first:bg-${headerBackgroundColor} first:after:hidden`
        )}
      >
        {children}
      </div>
    );
  }
);

export default TD;
