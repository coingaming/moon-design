import { Heading } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex justify-around w-full items-center">
    <Heading>Default color is Bulma</Heading>
    <Heading color="piccolo.100">Piccolo</Heading>
    <Heading color="trunks.100">Trunks</Heading>
    <Heading color="krillin.100">Krillin</Heading>
  </div>
);

export default Example;
