import { Checkbox } from '@heathmont/moon-core';
import { useState } from 'react';

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <Checkbox
      checked={isChecked}
      label="I agree to receive bonus &amp; marketing emails."
      onClick={() => setIsChecked(!isChecked)}
    />
  );
};

export default Example;
