import React from 'react';

const CheckboxTD: React.FC = ({ children }) => {
  return (
    <div
      className={'flex items-center h-full w-full'}
      style={{ justifyContent: 'center' }}
    >
      {children}
    </div>
  );
};

export default CheckboxTD;
