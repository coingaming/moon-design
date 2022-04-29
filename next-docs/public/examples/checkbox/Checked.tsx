import { Checkbox } from '@heathmont/moon-core';
import { useState } from 'react';

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <Checkbox
      checked={isChecked}
      label="Checkbox with checked state by default"
      onClick={() => setIsChecked(!isChecked)}
    />
  );
};

export default Example;
