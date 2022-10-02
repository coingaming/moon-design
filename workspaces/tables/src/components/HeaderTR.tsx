import React, {forwardRef} from 'react';

type HeaderTRProps = {
  children: any;
  reactTableProps?: any;
}

const HeaderTR = forwardRef<HTMLDivElement, HeaderTRProps>(({
  reactTableProps,
  children
}) => {
  return (<div
    {...reactTableProps}
    className='flex gap-4 rounded-moon-s-sm text-bulma moon-text-14 px-1 sticky'
  >
    {children}
  </div>);
});

export default HeaderTR;
