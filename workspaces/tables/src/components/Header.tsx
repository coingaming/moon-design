import React from 'react';

type HeaderProps = {
  headerBackgroundColor: string;
  selectable?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  headerBackgroundColor,
  selectable,
  children,
}) => {
  return (
    <div
      className={'flex flex-col sticky top-0 z-[99]'}
      style={selectable ? {backgroundColor: `rgb(var(--${headerBackgroundColor}))`} : {}}
    >
      {children}
    </div>
  );
};

export default Header;
