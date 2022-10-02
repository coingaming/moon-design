import React from 'react';

const Body: React.FC = ({ children }) => {
  return <div className='flex flex-col gap-1 relative z-0'>{children}</div>;
};

export default Body;
