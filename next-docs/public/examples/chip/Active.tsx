import { Chip } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Chip isActive size="small">
      Active
    </Chip>
    <Chip isActive>Active</Chip>
  </div>
);

export default Example;
