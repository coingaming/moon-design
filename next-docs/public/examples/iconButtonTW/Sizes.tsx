import { IconButton } from '@heathmont/moon-core-tw';
import { GenericSettings } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <IconButton size="xs" icon={<GenericSettings className="text-moon-16" />} />
    <IconButton size="sm" icon={<GenericSettings className="text-moon-24" />} />
    <IconButton icon={<GenericSettings className="text-moon-24" />} />
    <IconButton size="lg" icon={<GenericSettings className="text-moon-24" />} />
    <IconButton size="xl" icon={<GenericSettings className="text-moon-24" />} />
  </>
);

export default Example;
