import React, { useState } from 'react';
import { AuthCode } from '@heathmont/moon-core-tw';

const Example = () => {
  const [_result, setResult] = useState('');
  const handleOnChange = (res: string) => {
    setResult(res);
  };

  return <AuthCode onChange={handleOnChange} />;
}

export default Example;
