import { Caption } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Caption>Default font-weight is bold</Caption>
    <Caption isRegular>Font-weight is regular</Caption>
  </div>
);

export default Example;
