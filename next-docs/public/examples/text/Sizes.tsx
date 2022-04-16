import { Text } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Text>Default font-size is 16px</Text>
    <Text size={24}>Size is 24px</Text>
    <Text size={48}>Size is 48px</Text>
  </div>
);

export default Example;
