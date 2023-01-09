import { Input, Label, Hint } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <Label for="h-1">Medium (Default: md)</Label>
      <Input type="text" placeholder="Placeholder" id="h-1" />
      <Hint>Informative message holder</Hint>
    </div>
    <div className="w-full">
      <Label for="h-2">Xlarge (xl)</Label>
      <Input type="text" inputSize="xl" id="h-2" placeholder="Placeholder" />
      <Hint>Informative message holder</Hint>
    </div>
  </div>
);

export default Example;
