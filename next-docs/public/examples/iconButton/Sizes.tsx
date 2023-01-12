import { IconButton } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <IconButton size="xs" icon={<OtherFrame />} />
    <IconButton size="sm" icon={<OtherFrame />} />
    <IconButton icon={<OtherFrame />} />
    <IconButton size="lg" icon={<OtherFrame />} />
    <IconButton size="xl" icon={<OtherFrame />} />
  </>
);

export default Example;
