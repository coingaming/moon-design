import { Text } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Text>Paragraph is a default tag</Text>
    <Text as="span">Span tag</Text>
    <Text as="label">Label tag</Text>
  </div>
);

export default Example;
