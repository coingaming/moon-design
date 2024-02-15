import React from 'react';

type Props = {
  onClick: () => void;
  children?: React.ReactNode;
};

const ShowPassword = ({ children, onClick }: Props) => (
  <div
    onClick={onClick}
    role="alert"
    className="text-moon-14 text-bulma absolute top-2/4 mt-[-0.75rem] z-[3] underline cursor-pointer end-4"
  >
    {children}
  </div>
);

export default ShowPassword;
