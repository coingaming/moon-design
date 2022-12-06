import React, { forwardRef, ReactNode } from 'react';
import classNames from '../private/utils/classnames';
import type RowGaps from '../private/types/RowGaps';

type BodyProps = {
  children?: ReactNode;
  reactTableProps?: any;
  rowGap?: RowGaps;
};

const Body = forwardRef<HTMLDivElement, BodyProps>(
  ({ children, reactTableProps, rowGap }) => (
    <div
      {...reactTableProps}
      className={classNames('flex flex-col relative z-0 no-scrollbar', rowGap)}
    >
      {children}
    </div>
  )
);

export default Body;
