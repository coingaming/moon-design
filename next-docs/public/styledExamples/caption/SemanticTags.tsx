import { Caption } from '@heathmont/moon-core';

const Example = () => (
  <>
    <Caption>Span is a default tag</Caption>
    <Caption as="p">Paragraph tag</Caption>
    <Caption as="label">Label tag</Caption>
  </>
);

export default Example;
