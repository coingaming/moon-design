import React from 'react';

const OuterWrapper = ({ children }: { children?: React.ReactNode }) => (
  <div className="relative h-full w-full overflow-auto">{children}</div>
);

export default OuterWrapper;
