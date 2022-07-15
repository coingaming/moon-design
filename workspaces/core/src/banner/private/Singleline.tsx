import React from 'react';

export interface Props {
  description: string;
  link?: React.ReactElement;
}

const Singleline: React.FC<Props> = ({ description, link }) => {
  return (<div className='w-full bg-goten rounded-lg py-2 pl-3 flex-row'>
    <div className='sm:flex flex-row'>
      <p className='flex items-center align-middle'>{description}</p>
      {!!link && (<div className='flex sm:justify-end sm:items-center pl-1 gap-32'>{link}</div>)}
    </div>
  </div>);
};

export default Singleline;
