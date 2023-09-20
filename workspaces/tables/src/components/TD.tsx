import React, { forwardRef } from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';
import type TDProps from '../private/types/TDProps';
import getCellBorder from '../private/utils/getCellBorder';
import getFontSize from '../private/utils/getFontSize';
import getPadding from '../private/utils/getPadding';

const TD = forwardRef<HTMLDivElement, TDProps>(
  (
    {
      reactTableProps,
      isExpanded,
      isSelected,
      fontColor,
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
    },
    ref
  ) => (
    <div
      ref={ref}
      {...reactTableProps}
      role={role}
      className={mergeClassnames(
        'relative box-border justify-between items-center text-start',
        getFontSize(rowSize),
        getPadding(rowSize),
        isFirstColumn && 'rounded-s-lg',
        isLastColumn ? 'rounded-e-lg' : getCellBorder(isCellBorder),
        isExpanded && 'first:rounded-es-lg last:rounded-ee-lg after:hidden',
        isLastRow && 'first:rounded-s-0 last:rounded-e-0',
        isLastRow && hasParent && 'first:rounded-ss-0 last:rounded-se-0',
        isLastRow && !isExpanded && 'first:rounded-es-2 last:rounded-ee-2',
        isSelected
          ? 'text-bulma'
          : fontColor
          ? `text-${fontColor}`
          : 'text-bulma',
        stickySide === 'right' &&
          'before:absolute before:w-px before:bg-beerus before:h-[70%] before:bottom-[15%] before:start-0 before:-ms-2',
        isSelected || isHovered
          ? 'border-piccolo cursor-pointer bg-goku'
          : `bg-${backgroundColor} border-${backgroundColor}`,
        selectable &&
          'ps-2 text-bulma border-t-1 border-t-transparent border-b-1 border-b-transparent',
        variant === 'calendar' &&
          `first:bg-${headerBackgroundColor} first:after:hidden`
      )}
    >
      {children}
    </div>
  )
);

export default TD;
