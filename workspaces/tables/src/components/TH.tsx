import React, {forwardRef, ReactNode} from 'react';

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};
type THProps = {
  headerBackgroundColor?: string;
  stickySide?: string;
  children?: ReactNode;
  reactTableProps?: any;
};

const TH = forwardRef<HTMLDivElement, THProps>(({
  headerBackgroundColor,
  children,
  reactTableProps,
  stickySide
}) => {
  return (
    <div
      {...reactTableProps}
      className={classNames(
        'p-2 relative text-[12px] text-start font-normal justify-between w-full',
        'after:content-[""] after:absolute after:w-px after:bg-beerus after:h-[70%] after:bottom-[15%] after:right-0',
        `text-trunks bg-${headerBackgroundColor}`,
        //stickySide === 'right' ? 'before:content-[""] before:absolute before:w-px before:bg-beerus before:h-[70%] before:bottom-[15%] before:left-0 before:-margin-l-2' : '',
        stickySide === 'right' ? 'shadow-left' : '',
      )}
    >
      {children}
    </div>
  );
});

export default TH;
