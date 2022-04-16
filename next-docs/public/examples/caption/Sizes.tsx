import { Caption } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Caption>Default font-size is 10px</Caption>
    <Caption size={9}>Size is 9px</Caption>
  </div>
);

export default Example;
