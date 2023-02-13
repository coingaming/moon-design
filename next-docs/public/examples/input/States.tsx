import { Input, Label, Hint } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <Label htmlFor="dis-1" disabled>
        Label
      </Label>
      <Input type="text" placeholder="Disabled" id="dis-1" disabled />
      <Hint disabled>Informative message holder</Hint>
    </div>
    <div className="w-full">
      <Label htmlFor="err-1">Label</Label>
      <Input type="text" placeholder="Error" id="err-1" error />
      <Hint error>Error message</Hint>
    </div>
    <div className="w-full">
      <Label htmlFor="dis-1">Label</Label>
      <Input
        type="text"
        placeholder="Placeholder"
        id="dis-1"
        value="Read only text"
        readOnly
      />
      <Hint>Informative message holder</Hint>
    </div>
  </div>
);

export default Example;
