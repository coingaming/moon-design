import { Switch } from '@heathmont/moon-core-tw';
import { useState } from 'react';

const Example = () => {
  const [value, setValue] = useState(false);

  const onChange = (val: boolean) => {
    setValue(val);
  };
  return (
    <>
      <Switch onChange={onChange} checked={value} size="xs" />
      <Switch onChange={onChange} checked={value} size="sm" />
      <Switch onChange={onChange} checked={value} size="md" />
    </>
  );
};

export default Example;
