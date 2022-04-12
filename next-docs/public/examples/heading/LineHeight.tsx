import { Heading } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Heading>Line-height is pre-calculated</Heading>
    <Heading lineHeight={32}>Custon line-height</Heading>
  </div>
);

export default Example;
