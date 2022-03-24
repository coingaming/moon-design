import { Text } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Text>Text-align is not specified</Text>
    <Text textAlign="center">Centered text</Text>
    <Text textAlign="right">Right alignment</Text>
  </div>
);

export default Example;
