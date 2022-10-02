import React, {ReactNode, forwardRef} from 'react';
import styled from 'styled-components';
import {TableVariant} from '../func/Table';
import classNames from "../utils/classnames";
import BodyTR from './BodyTR';
import TD from './TD';
import TH from './TH';

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
  ref?: any;
  onScroll?: (tableRef: any) => any;
};

const TableWrapper = forwardRef<HTMLDivElement, TableWrapperProps>(({
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
  ref
}) => {
  return (<div
    {...reactTableProps}
    ref={ref}
    style={style ?? {}}
    className={classNames(`
      table-wrapper
      overflow-hidden
      flex
      flex-col
      ${className}
    `)}
    variant={variant}
    onScroll={onScroll}
  >{children}</div>);
});

const TableWrapperOne = styled.div<{
  isScrolledToLeft: boolean;
  isScrolledToRight: boolean;
  variant?: TableVariant;
  defaultRowBackgroundColor?: string;
  evenRowBackgroundColor?: string;
  headerBackgroundColor?: string;
}>(
  ({
    theme,
    isScrolledToLeft,
    isScrolledToRight,
    variant,
    headerBackgroundColor,
  }) => ({
    '&.sticky': {
      overflow: 'scroll',
      '.body': {
        position: 'relative',
        zIndex: 0,
      },
      '[data-sticky-td]': {
        position: 'sticky',
      },
      ...(!isScrolledToLeft
        ? {
          '[data-sticky-last-left-td]': {
            boxShadow: `6px 0px 9px `,
          },
        }
        : {}),

      ...(!isScrolledToRight
        ? {
          '[data-sticky-first-right-td]': {
            boxShadow: `-6px 0px 9px -10px`,
          },
        }
        : {}),
    },
    // ...(variant === 'calendar'
    //   ? {
    //       [TH]: {
    //         '&:first-child': {
    //           '&::after': {
    //             display: 'none',
    //           },
    //         },
    //       },
    //       [BodyTR]: {
    //         [TD]: {
    //           '&:first-child': {
    //             borderRadius: 0,
    //             '&::after': {
    //               display: 'none',
    //             },
    //             '& + div': {
    //               borderTopLeftRadius: theme.newTokens.borderRadius.surface.small,
    //               borderBottomLeftRadius:
    //                 theme.newTokens.borderRadius.surface.small,
    //             },
    //           },
    //         },
    //       },
    //     }
    //   : {}),
  })
);

export default TableWrapper;
