import { Chip } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around items-center w-full">
    <Chip isStroke size="small">
      Stroke on hover
    </Chip>
    <Chip isStroke>Stroke on hover</Chip>
  </div>
);

export default Example;
