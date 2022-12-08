import React from 'react';

const ShowPassword: React.FC<{ onClick: () => void }> = ({
  children,
  onClick,
}) => (
  <div
    onClick={onClick}
    role="alert"
    className="text-moon-14 text-bulma absolute top-2/4 mt-[-0.75rem] z-[3] underline cursor-pointer rtl:left-4 ltr:right-4"
  >
    {children}
  </div>
);

export default ShowPassword;
