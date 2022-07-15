import { Switch } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [value, setValue] = useState(false);

  const onChange = (val: boolean) => {
    setValue(val);
  };
  return (
    <>
      <Switch
        onChange={onChange}
        checked={value}
        button={{
          onLabel: 'ON',
          offLabel: 'OFF',
        }}
        size="md"
      />

      <Switch
        onChange={onChange}
        checked={value}
        button={{
          onLabel: 'ON',
          offLabel: 'OFF',
        }}
        size="lg"
      />
    </>
  );
};

export default Example;
