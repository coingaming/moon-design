import React from 'react';
import { rem } from '@heathmont/moon-utils-tw';

const Header: React.FC<HeaderProps> = ({
  headerBackgroundColor,
  selectable,
  children,
}) => {
  return (
    <div
      className={'sticky z-1 t-0'}
      style={
        selectable
          ? {
              paddingLeft: rem(46),
              backgroundColor: `rgb(var(--${headerBackgroundColor}))`,
            }
          : {}
      }
    >
      {children}
    </div>
  );
};

type HeaderProps = {
  headerBackgroundColor: string;
  selectable?: boolean;
};

export default Header;
