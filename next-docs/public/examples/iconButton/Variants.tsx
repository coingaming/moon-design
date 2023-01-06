import { IconButton } from '@heathmont/moon-core-tw';
import { GenericSettings } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <IconButton icon={<GenericSettings className="text-moon-24" />} />
    <IconButton
      variant="secondary"
      icon={<GenericSettings className="text-moon-24" />}
    />
    <IconButton
      variant="tertiary"
      icon={<GenericSettings className="text-moon-24" />}
    />
    <IconButton
      variant="ghost"
      icon={<GenericSettings className="text-moon-24" />}
    />
  </>
);

export default Example;
