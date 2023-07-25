import React, { forwardRef } from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';
import getCellBorder from '../private/utils/getCellBorder';
import getFontSize from '../private/utils/getFontSize';
import getPadding from '../private/utils/getPadding';
import type TDProps from '../private/types/TDProps';

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
    rowSize,
    isCellBorder,
    role = 'cell',
  }) => (
    <div
      {...reactTableProps}
      role={role}
      className={mergeClassnames(
        'relative box-border justify-between items-center text-start',
        getFontSize(rowSize),
        getPadding(rowSize),
        isFirstColumn && 'rounded-l-lg',
        isLastColumn ? 'rounded-r-lg' : getCellBorder(isCellBorder),
        isExpanded && 'first:rounded-bl-lg last:rounded-br-lg after:hidden',
        isLastRow &&
          'first:rounded-tl-0 first:rounded-bl-0 last:rounded-tl-0 last:rounded-br-0',
        isLastRow && hasParent && 'first:rounded-tl-0 last:rounded-tr-0',
        isLastRow && !isExpanded && 'first:rounded-bl-2 last:rounded-br-2',
        isSelected
          ? 'text-bulma'
          : fontColor
          ? `text-${fontColor}`
          : 'text-bulma',
        stickySide === 'right' &&
          'before:content-[""] before:absolute before:w-px before:bg-beerus before:h-[70%] before:bottom-[15%] before:left-0 before:-margin-l-2',
        (isSelected && !customBackground) || isHovered
          ? 'border-piccolo cursor-pointer'
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
  )
);

export default TD;
