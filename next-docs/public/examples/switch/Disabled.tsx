import { Switch } from '@heathmont/moon-core-tw';

const Example = () => {
  return (
    <>
      <Switch checked disabled aria-label="Disabled Switch" />
      <Switch checked={false} disabled aria-label="Disabled Switch" />
    </>
  );
};

export default Example;
