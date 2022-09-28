import React from 'react';

const Body: React.FC = ({ children }) => {
  return <div className={'relative z-0'}>{children}</div>;
};

export default Body;
