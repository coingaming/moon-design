import React from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type TableProps = {
  className?: string;
  children?: React.ReactNode;
  size?: Size;
};

const getSize = (size?: Size) => {
  switch (size) {
    case 'xs':
      return '[&_td]:px-2 [&_td]:py-1 [&_td]:text-moon-12 [&_th]:px-2 [&_th]:py-1 [&_th]:text-moon-12';
    case 'sm':
      return '[&_td]:px-3 [&_td]:py-1 [&_td]:text-moon-14 [&_th]:px-3 [&_th]:py-1 [&_th]:text-moon-14';
    case 'lg':
      return '[&_td]:px-3 [&_td]:py-3 [&_td]:text-moon-14 [&_th]:px-3 [&_th]:py-3 [&_th]:text-moon-14';
    case 'xl':
      return '[&_td]:px-3 [&_td]:py-4 [&_td]:text-moon-14 [&_th]:px-3 [&_th]:py-4 [&_th]:text-moon-14';
    case '2xl':
      return '[&_td]:px-3 [&_td]:py-5 [&_td]:text-moon-14 [&_th]:px-3 [&_th]:py-5 [&_th]:text-moon-14';
    case 'md':
    default:
      return '[&_td]:px-3 [&_td]:py-2 [&_td]:text-moon-14 [&_th]:px-3 [&_th]:py-2 [&_th]:text-moon-14';
  }
};

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

type BodyProps = {
  className?: string;
  children?: React.ReactNode;
};

const Body = ({ children, className, ...props }: BodyProps) => (
  <tbody className={mergeClassnames(className)} {...props}>
    {children}
  </tbody>
);

type HeadProps = {
  className?: string;
  children?: React.ReactNode;
};

const Head = ({ children, className, ...props }: HeadProps) => (
  <thead className={mergeClassnames(className)} {...props}>
    {children}
  </thead>
);

type RowProps = {
  className?: string;
  children?: React.ReactNode;
};

const Row = ({ children, className, ...props }: RowProps) => (
  <tr className={mergeClassnames(className)} {...props}>
    {children}
  </tr>
);

type HeaderProps = {
  className?: string;
  children?: React.ReactNode;
};

const Header = ({ children, className, ...props }: HeaderProps) => (
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

type CellProps = {
  className?: string;
  children?: React.ReactNode;
};

const Cell = ({ children, className, ...props }: CellProps) => (
  <td
    className={mergeClassnames(
      className,
      'text-start text-bulma bg-gohan first:rounded-s-moon-s-sm last:rounded-e-moon-s-sm'
    )}
    {...props}
  >
    {children}
  </td>
);

const Table = Object.assign(TableRoot, { Row, Header, Cell, Body, Head });

export default Table;
