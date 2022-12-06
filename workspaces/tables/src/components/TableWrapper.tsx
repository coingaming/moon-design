import React, { ReactNode, forwardRef } from 'react';
import { TableVariant } from '../func/Table';
import classNames from '../private/utils/classnames';

type TableWrapperProps = {
  reactTableProps: any;
  isScrolledToLeft: boolean;
  isScrolledToRight: boolean;
  style?: React.CSSProperties;
  className?: string;
  variant?: TableVariant;
  defaultRowBackgroundColor?: string;
  evenRowBackgroundColor?: string;
  headerBackgroundColor?: string;
  children?: ReactNode;
  tableRef?: any;
  onScroll?: (tableRef: any) => any;
};

const TableWrapper = forwardRef<HTMLDivElement, TableWrapperProps>(
  ({
    reactTableProps,
    isScrolledToLeft,
    isScrolledToRight,
    variant,
    defaultRowBackgroundColor,
    evenRowBackgroundColor,
    headerBackgroundColor,
    className,
    style,
    children,
    onScroll,
    tableRef,
  }) => {
    return (
      <div
        {...reactTableProps}
        ref={tableRef}
        style={style ?? {}}
        className={classNames(`
      table-wrapper
      sm:overflow-auto
      overflow-scroll
      no-scrollbar
      flex
      flex-col

      ${className}
      ${variant === 'calendar' ? 'first:after:hidden' : ''}
    `)}
        variant={variant}
        onScroll={onScroll}
      >
        {children}
      </div>
    );
  }
);

export default TableWrapper;
