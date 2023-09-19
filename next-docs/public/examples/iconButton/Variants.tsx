import { IconButton } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <IconButton icon={<OtherFrame />} />
    <IconButton variant="outline" icon={<OtherFrame />} />
    <IconButton variant="ghost" icon={<OtherFrame />} />
  </>
);

export default Example;
