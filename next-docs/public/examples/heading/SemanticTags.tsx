import { Heading } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Heading>H3 is a default tag</Heading>
    <Heading as="h2">H2 tag</Heading>
    <Heading as="h6">H6 tag</Heading>
  </div>
);

export default Example;
