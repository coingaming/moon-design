import { Chip } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Chip size="small">Small</Chip>
    <Chip size="medium">Medium</Chip>
    <Chip>Default</Chip>
  </div>
);

export default Example;
