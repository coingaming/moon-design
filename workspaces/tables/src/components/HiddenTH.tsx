import React from 'react';

const HiddenTH: React.FC<HiddenTHProps> = ({ style, children }) => {
  return (
    <div className={'h-px'} style={{ ...style }}>
      {children}
    </div>
  );
};

type HiddenTHProps = {
  style: React.CSSProperties;
  children?: React.ReactNode;
};

export default HiddenTH;