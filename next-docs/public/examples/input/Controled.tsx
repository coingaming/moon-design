import { Input } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [color, setColor] = useState('FFFFFF');
  return (
    <Input
      aria-label="default"
      value={color}
      onChange={(e) => {
        setColor(e.target.value);
        console.log(e.target.value);
      }}
    />
  );
};

export default Example;
