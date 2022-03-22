import { Caption } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Caption>Text-align is not specified</Caption>
    <Caption textAlign="center">Centered text</Caption>
    <Caption textAlign="right">Right alignment</Caption>
  </div>
);

export default Example;
