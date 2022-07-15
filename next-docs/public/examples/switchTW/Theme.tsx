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
        isThemeSwitcher={true}
        size="xs"
      />

      <Switch
        onChange={onChange}
        checked={value}
        isThemeSwitcher={true}
        size="sm"
      />

      <Switch
        onChange={onChange}
        checked={value}
        isThemeSwitcher={true}
        size="md"
      />
    </>
  );
};

export default Example;
