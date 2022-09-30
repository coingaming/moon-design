import React from 'react';
import { ColorNames } from '@heathmont/moon-themes-tw';

type HeaderProps = {
  headerBackgroundColor: ColorNames;
  selectable?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  headerBackgroundColor,
  selectable,
  children,
}) => {
  return (
    <div
      className={'flex flex-col gap-1 sticky'}
      style={
        selectable
          ? {
              backgroundColor: `rgb(var(--${headerBackgroundColor}))`,
            }
          : {}
      }
    >
      {children}
    </div>
  );
};

export default Header;
