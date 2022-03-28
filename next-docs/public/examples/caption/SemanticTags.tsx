import { Caption } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Caption>Span is a default tag</Caption>
    <Caption as="p">Paragraph tag</Caption>
    <Caption as="label">Label tag</Caption>
  </div>
);

export default Example;
