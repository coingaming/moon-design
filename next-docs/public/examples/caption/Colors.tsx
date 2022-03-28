import { Caption } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Caption>Defaul color is Bulma</Caption>
    <Caption color="piccolo.100">Piccolo</Caption>
    <Caption color="trunks.100">Trunks</Caption>
    <Caption color="krillin.100">Krillin</Caption>
  </div>
);

export default Example;
