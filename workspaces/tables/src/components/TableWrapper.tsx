import React, { forwardRef } from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';
import type TableWrapperProps from '../private/types/TableWrapperProps';

const TableWrapper = forwardRef<HTMLDivElement, TableWrapperProps>(
  ({
    reactTableProps,
    variant,
    className,
    style,
    children,
    onScroll,
    tableRef,
  }) => (
    <div
      {...reactTableProps}
      ref={tableRef}
      style={style ?? {}}
      className={mergeClassnames(
        'table-wrapper sm:overflow-auto overflow-scroll no-scrollbar flex flex-col',
        variant === 'calendar' && 'first:after:hidden',
        className
      )}
      variant={variant}
      onScroll={onScroll}
    >
      {children}
    </div>
  )
);

export default TableWrapper;
