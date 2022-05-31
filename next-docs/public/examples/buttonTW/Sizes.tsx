import { Button } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Button size="xs">xSmall</Button>
    <Button size="sm">Small</Button>
    <Button>Medium is default</Button>
    <Button size="lg">Large</Button>
    <Button size="xl">xLarge</Button>
  </div>
);

export default Example;
