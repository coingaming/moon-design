import React, { forwardRef } from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';
import getCellBorder from '../private/utils/getCellBorder';
import getFontSize from '../private/utils/getFontSize';
import getPadding from '../private/utils/getPadding';
import type THProps from '../private/types/THProps';

const TH = forwardRef<HTMLDivElement, THProps>(
  ({
    headerBackgroundColor,
    children,
    reactTableProps,
    stickySide,
    isLastColumn,
    variant,
    rowSize,
    isCellBorder,
  }) => (
    <div
      {...reactTableProps}
      className={mergeClassnames(
        'relative text-start justify-between font-medium',
        getFontSize(rowSize),
        getPadding(rowSize),
        !isLastColumn && getCellBorder(isCellBorder),
        `bg-${headerBackgroundColor}`,
        variant === 'calendar' && 'first:after:hidden',
        stickySide === 'right' &&
          'before:content-[""] before:absolute before:w-px before:bg-beerus before:h-[70%] before:bottom-[15%] before:left-0 before:-margin-l-2'
      )}
    >
      {children}
    </div>
  )
);

export default TH;
