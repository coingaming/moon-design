import { Badge } from '@heathmont/moon-components';
import { GenericUser } from '@heathmont/moon-icons';
import { rem } from "@heathmont/moon-utils";

const Example = () => (
  <div className="flex justify-around w-full">
    <Badge variant="default" iconLeft={<GenericUser fontSize={rem(23)}/>}>
      Default
    </Badge>
    <Badge variant="default" iconRight={<GenericUser fontSize={rem(23)}/>}>
      Default
    </Badge>
  </div>
);

export default Example;
