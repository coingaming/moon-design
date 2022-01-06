import { Button } from '@heathmont/moon-core';

const Sizes = () => (
  <div className="flex justify-around w-full items-center">
    <Button size="small">Small</Button>
    <Button>Medium is default</Button>
    <Button size="large">Large</Button>
    <Button size="xlarge">xLarge</Button>
  </div>
);

export default Sizes;
