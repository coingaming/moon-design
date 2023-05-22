import React, { useState } from 'react';
import { AuthCode } from '@heathmont/moon-core-tw';

const Example = () => {
  const [result, setResult] = useState('');
  const handleOnChange = (res: string) => {
    setResult(res);
  };

  return <div className='flex flex-col gap-4'>
    <AuthCode
      onChange={handleOnChange}
      placeholder='123456'
      inputSize='sm'
    />
    <AuthCode
      onChange={handleOnChange}
      placeholder='123456'
      inputSize='md'
    />
    <AuthCode
      onChange={handleOnChange}
      placeholder='123456'
      inputSize='lg'
    />
    <AuthCode
      onChange={handleOnChange}
      placeholder='123456'
      inputSize='xl'
    />
  </div>;
}

export default Example;
