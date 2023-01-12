import { IconButton } from '@heathmont/moon-core-tw';
import { OtherFrame } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <IconButton animation="progress" icon={<OtherFrame />} />
    <IconButton animation="success" icon={<OtherFrame />} />
    <IconButton animation="error" icon={<OtherFrame />} />
    <IconButton animation="pulse" icon={<OtherFrame />} />
  </>
);

export default Example;
