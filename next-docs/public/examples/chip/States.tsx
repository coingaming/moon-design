import { Chip } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Chip isActive={true}>Active</Chip>
    <Chip>Inactive</Chip>
  </div>
);

export default Example;
