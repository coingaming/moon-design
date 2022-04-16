import { Heading } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Heading>Text-align is not specified</Heading>
    <Heading textAlign="center">Centered Heading</Heading>
    <Heading textAlign="right">Right alignment</Heading>
  </div>
);

export default Example;
