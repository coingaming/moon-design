import { Tag } from '@heathmont/moon-core-tw';
import { ControlsClose, OtherFrame } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <Tag iconLeft={<OtherFrame />}>Left icon</Tag>
    <Tag iconRight={<ControlsClose />}>Right icon</Tag>
    <Tag iconLeft={<OtherFrame />} iconRight={<ControlsClose />}>
      Both icons
    </Tag>
  </>
);

export default Example;
