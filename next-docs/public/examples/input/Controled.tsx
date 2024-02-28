import { Hint, Input } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [color, setColor] = useState('FFFFFF');
  return (
    <div className="w-full">
      <Input
        aria-label="controled"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <Hint>Result: {color}</Hint>
    </div>
  );
};

export default Example;
