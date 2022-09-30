import React from 'react';

const HeaderTR: React.FC = ({ children }) => {
  return (
    <div
      className={
        'flex gap-4 rounded-moon-s-sm text-bulma moon-text-14 px-4 sticky'
      }
    >
      {children}
    </div>
  );
};

export default HeaderTR;
