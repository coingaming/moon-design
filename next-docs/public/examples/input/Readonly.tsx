import { Input, Label, Hint } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <Label for="dis-1">Medium (Default: md)</Label>
      <Input
        type="text"
        placeholder="Placeholder"
        id="dis-1"
        value="Read only text"
        readOnly
      />
      <Hint>Informative message holder</Hint>
    </div>
    <div className="w-full">
      <Label for="dis-2">Xlarge (xl)</Label>
      <Input
        type="text"
        inputSize="xl"
        id="dis-2"
        placeholder="Placeholder"
        value="Read only text"
        readOnly
      />
      <Hint>Informative message holder</Hint>
    </div>
  </div>
);

export default Example;
