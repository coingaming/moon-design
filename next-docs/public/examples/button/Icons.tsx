import { Button } from '@heathmont/moon-components';
import { IconProfile } from '@heathmont/moon-assets';

const Example = () => (
  <div className="flex justify-around w-full">
    <Button iconLeft={<IconProfile color="#fff" />} variant="primary">
      Default
    </Button>
    <Button iconRight={<IconProfile color="#fff" />} variant="primary">
      Default
    </Button>
  </div>
);

export default Example;
