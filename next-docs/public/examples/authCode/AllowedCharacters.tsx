import React, { useState } from 'react';
import { AuthCode } from '@heathmont/moon-core-tw';

const Example = () => {
  const [result, setResult] = useState('');
  const handleOnChange = (res: string) => {
    setResult(res);
  };
  return <AuthCode allowedCharacters="numeric" onChange={handleOnChange} />;
};

export default Example;
