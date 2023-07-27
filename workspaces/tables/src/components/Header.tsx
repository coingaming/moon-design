import React from 'react';
import type HeaderProps from '../private/types/HeaderProps';

const Header = ({
  headerBackgroundColor,
  selectable,
  children,
}: HeaderProps) => (
  <div
    className="flex flex-col sticky top-0 z-[99]"
    style={
      selectable
        ? { backgroundColor: `rgb(var(--${headerBackgroundColor}))` }
        : {}
    }
  >
    {children}
  </div>
);

export default Header;
