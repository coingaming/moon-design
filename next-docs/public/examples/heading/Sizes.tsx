import { Heading } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Heading>Default font-size is 16px</Heading>
    <Heading size={24}>Size is 24px</Heading>
    <Heading size={48}>Size is 48px</Heading>
  </div>
);

export default Example;
