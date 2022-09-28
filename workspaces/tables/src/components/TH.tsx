import React from 'react';
import { ColorNames } from '@heathmont/moon-themes-tw';
import { rem } from '@heathmont/moon-utils-tw';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

const TH: React.FC<THProps> = ({ headerBackgroundColor, children }) => {
  return (
    <div
      className={classNames(
        'p-2 relative text-[12px]',
        `after:content-[""] after:absolute after:w-[1px] after:bg-beerus after:h-[70%] after:b-[15%] after:r-0`,
        'last:br-0'
      )}
      style={{
        fontSize: rem(12),
        color: 'rgb(var(--trunks))',
        backgroundColor: `rgb(var(--${headerBackgroundColor}))`,
      }}
    >
      {children}
    </div>
  );
};

//privremeno dodato u table-mobule
// inline-block w-2 h-full absolute right-0 top-0 z-1
// after:content['""'] after:absolute after:w-px after:right-0 after:height-[70%] after:b-[15%]
// .isResizing :
// after: bg-piccolo

type THProps = {
  headerBackgroundColor?: ColorNames;
};

export default TH;
