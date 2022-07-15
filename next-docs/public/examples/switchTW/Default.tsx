import { Switch } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [value, setValue] = useState(false);

  return (
    <>
      <Switch
        onChange={(val: boolean) => setValue(val)}
        checked={value}
        size="md"
      />
    </>
  );
};

export default Example;
