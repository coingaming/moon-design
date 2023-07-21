import React from 'react';
import type HiddenTHProps from '../private/types/HiddenTHProps';

const HiddenTH = ({ style, children }: HiddenTHProps) => (
  <div className="h-px" style={{ ...style }}>
    {children}
  </div>
);

export default HiddenTH;
