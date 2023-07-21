import React, { forwardRef } from 'react';
import type HeaderTRProps from '../private/types/HeaderTRProps';

const HeaderTR = forwardRef<HTMLDivElement, HeaderTRProps>(
  ({ reactTableProps, children }) => (
    <div {...reactTableProps} className="flex rounded-moon-s-sm sticky">
      {children}
    </div>
  )
);

export default HeaderTR;
