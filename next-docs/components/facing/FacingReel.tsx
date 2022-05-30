import React from 'react';

type Props = {
  children: React.ReactNode;
};

const FacingReel: React.FC<Props> = ({ children }) => (
  <div className="flex flex-row gap-16 overflow-x-auto reel">{children}</div>
);

export default FacingReel;
