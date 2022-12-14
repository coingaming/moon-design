import { Input, Hint } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <Input type="text" placeholder="Placeholder" />
      <Hint>Informative message holder</Hint>
    </div>
    <div className="w-full">
      <Input type="text" inputSize="xl" placeholder="Placeholder" />
      <Hint>Informative message holder</Hint>
    </div>
  </div>
);

export default Example;
