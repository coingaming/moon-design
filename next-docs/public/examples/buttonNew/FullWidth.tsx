import { Button } from '@heathmont/moon-core';
import { GenericSettings } from '@heathmont/moon-icons';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Button iconRight={<GenericSettings />} fullWidth>
      Full width
    </Button>
  </div>
);

export default Example;
