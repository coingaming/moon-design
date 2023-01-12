import { IconButton } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <IconButton icon={<OtherFrame />} />
    <IconButton variant="secondary" icon={<OtherFrame />} />
    <IconButton variant="tertiary" icon={<OtherFrame />} />
    <IconButton variant="ghost" icon={<OtherFrame />} />
  </>
);

export default Example;
