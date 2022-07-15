import { Switch } from '@heathmont/moon-core-tw';
import { useState } from 'react';
import { OtherMoon, OtherSun } from '@heathmont/moon-icons-tw';

const Example = () => {
  const [value, setValue] = useState(false);

  return (
    <>
      <Switch
        onChange={(val: boolean) => setValue(val)}
        checked={value}
        customOnIcon={<OtherMoon color="white" fontSize="1.2rem" />}
        customOffIcon={<OtherSun color="green" fontSize="1.2rem" />}
      />
    </>
  );
};

export default Example;
