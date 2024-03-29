import React, { forwardRef } from 'react';
import type HeaderTRProps from '../private/types/HeaderTRProps';

const HeaderTR = forwardRef<HTMLDivElement, HeaderTRProps>(
  ({ reactTableProps, children }, ref) => (
    <div
      ref={ref}
      {...reactTableProps}
      className="flex rounded-moon-s-sm sticky"
    >
      {children}
    </div>
  )
);

export default HeaderTR;
