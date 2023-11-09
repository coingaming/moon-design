import React, { useState } from 'react';
import { AuthCode, Hint } from '@heathmont/moon-core-tw';

const Example = () => {
  const [result, setResult] = useState('');
  const handleOnChange = (res: string) => {
    setResult(res);
  };
  return (
    <div className="flex items-center flex-col">
      <AuthCode onChange={handleOnChange} />
      <Hint>Hint message</Hint>
    </div>
  );
};

export default Example;
