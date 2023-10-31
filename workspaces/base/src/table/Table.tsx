import React from 'react';
import type Props from './private/types/Props';
import type TableProps from './private/types/TableProps';
import getSize from './private/utils/getSize';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const TableRoot = ({ children, className, size, ...props }: TableProps) => (
  <table
    className={mergeClassnames(
      'w-full border-separate border-spacing-y-1 [&_td]:px-2',
      getSize(size),
      className
    )}
    {...props}
  >
    {children}
  </table>
);

const Body = ({ children, className, ...props }: Props) => (
  <tbody className={mergeClassnames(className)} {...props}>
    {children}
  </tbody>
);

const Head = ({ children, className, ...props }: Props) => (
  <thead className={mergeClassnames(className)} {...props}>
    {children}
  </thead>
);

const Row = ({ children, className, ...props }: Props) => (
  <tr className={mergeClassnames(className)} {...props}>
    {children}
  </tr>
);

const Header = ({ children, className, ...props }: Props) => (
  <th
    className={mergeClassnames(
      className,
      'text-moon-14 px-3 py-2 font-medium text-start text-bulma'
    )}
    {...props}
  >
    {children}
  </th>
);

const Cell = ({ children, className, ...props }: Props) => (
  <td
    className={mergeClassnames(
      className,
      'text-start text-bulma bg-goku first:rounded-s-moon-s-sm last:rounded-e-moon-s-sm'
    )}
    {...props}
  >
    {children}
  </td>
);

const Table = Object.assign(TableRoot, { Row, Header, Cell, Body, Head });

export default Table;
