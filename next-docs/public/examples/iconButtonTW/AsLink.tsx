import { IconButton } from '@heathmont/moon-core-tw';
import { GenericSettings } from '@heathmont/moon-icons-tw';

const Example = () => (
  <IconButton
    as="a"
    href="/core/button"
    icon={<GenericSettings className="text-moon-24" />}
  />
);

export default Example;
