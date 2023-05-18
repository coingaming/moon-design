import React, { useState } from 'react';
import { AuthCode } from '@heathmont/moon-core-tw';

const Example = () => {
  const [result, setResult] = useState('');
  const handleOnChange = (res: string) => {
    setResult(res);
  };

  return <AuthCode
    onChange={handleOnChange}
    className='w-full justify-between [&_input]:flex [&_input]:grow'
  />;
}

export default Example;
