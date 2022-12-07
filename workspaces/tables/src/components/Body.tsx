import React, { forwardRef, ReactNode } from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';
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
      className={mergeClassnames(
        'flex flex-col relative z-0 no-scrollbar',
        rowGap
      )}
    >
      {children}
    </div>
  )
);

export default Body;
