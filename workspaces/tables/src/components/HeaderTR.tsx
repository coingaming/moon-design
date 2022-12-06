import React, { forwardRef } from 'react';

type HeaderTRProps = {
  children: any;
  reactTableProps?: any;
};

const HeaderTR = forwardRef<HTMLDivElement, HeaderTRProps>(
  ({ reactTableProps, children }) => {
    return (
      <div {...reactTableProps} className="flex rounded-moon-s-sm sticky">
        {children}
      </div>
    );
  }
);

export default HeaderTR;
