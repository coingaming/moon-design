import { Text } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Text>Line-height is pre-calculated</Text>
    <Text lineHeight={32}>Custon line-height</Text>
  </div>
);

export default Example;
