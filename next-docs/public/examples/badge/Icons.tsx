import { Badge } from '@heathmont/moon-components';
import { IconProfile } from '@heathmont/moon-assets';

const Example = () => (
  <div className="flex justify-around w-full">
    <Badge variant="default" iconLeft={<IconProfile color="#fff" />}>
      Default
    </Badge>
    <Badge variant="default" iconRight={<IconProfile color="#fff" />}>
      Default
    </Badge>
  </div>
);

export default Example;
