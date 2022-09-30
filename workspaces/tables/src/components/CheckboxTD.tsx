import React from 'react';

const CheckboxTD: React.FC = ({ children }) => {
  return (
    <div className={'flex items-center h-full w-full justify-center'}>
      {children}
    </div>
  );
};

export default CheckboxTD;
