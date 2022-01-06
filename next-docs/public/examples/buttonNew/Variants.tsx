import { Button } from '@heathmont/moon-core';

const Variants = () => (
  <div className="flex justify-around w-full items-center">
    <Button>Primary is default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
);

export default Variants;
