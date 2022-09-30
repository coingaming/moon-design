import React, { ReactNode } from 'react';
import { ColorNames } from '@heathmont/moon-themes-tw';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};
type THProps = {
  headerBackgroundColor?: ColorNames;
  children?: ReactNode;
};
const TH: React.FC<THProps> = ({ headerBackgroundColor, children }) => {
  return (
    <div
      className={classNames(
        `p-2 relative text-[12px] py-3 text-start font-normal justify-between w-full \
       after:content-[""] after:absolute after:w-px after:bg-beerus after:h-[70%] after:bottom-[15%] after:right-0 \
       text-trunks bg-${headerBackgroundColor}`
      )}
    >
      {children}
    </div>
  );
};

export default TH;
