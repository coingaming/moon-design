import React, { forwardRef } from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';
import type BodyProps from '../private/types/BodyProps';

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
