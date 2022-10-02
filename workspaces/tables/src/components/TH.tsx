import React, {forwardRef, ReactNode} from 'react';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};
type THProps = {
  headerBackgroundColor?: string;
  children?: ReactNode;
  reactTableProps?: any;
};

const TH = forwardRef<HTMLDivElement, THProps>(({
  headerBackgroundColor,
  children,
  reactTableProps
}) => {
  return (
    <div
      {...reactTableProps}
      className={classNames(
        `p-2 relative text-[12px] text-start font-normal justify-between w-full
       after:content-[""] after:absolute after:w-px after:bg-beerus after:h-[70%] after:bottom-[15%] after:right-0
       text-trunks bg-${headerBackgroundColor}`
      )}
    >
      {children}
    </div>
  );
});

export default TH;
