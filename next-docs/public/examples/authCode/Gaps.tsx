import React, { useState } from 'react';
import { AuthCode } from '@heathmont/moon-core-tw';

const Example = () => {
  const [result1, setResult1] = useState('');
  const handleOnChange1 = () => {
    setResult1(result1);
  };
  const [result12, setResult2] = useState('');
  const handleOnChange2 = () => {
    setResult2(result12);
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <AuthCode onChange={handleOnChange1} />
      <AuthCode onChange={handleOnChange2} className="gap-4" />
    </div>
  );
};

export default Example;
