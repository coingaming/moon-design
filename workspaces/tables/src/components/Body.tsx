import React, {forwardRef, ReactNode} from 'react';

type BodyProps = {
  children?: ReactNode;
  reactTableProps?: any;
};

const Body = forwardRef<HTMLDivElement, BodyProps>(({
  children,
  reactTableProps,
}) => {
  return (<div
    {...reactTableProps}
    className='flex flex-col gap-1 relative z-0'
  >{children}</div>);
});

export default Body;
