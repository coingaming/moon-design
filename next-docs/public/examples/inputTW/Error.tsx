import { Input, Label, Hint } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <Label for="err-1">Medium (Default: md)</Label>
      <Input type="text" placeholder="Placeholder" id="err-1" error />
      <Hint error>Error message</Hint>
    </div>
    <div className="w-full">
      <Label for="err-2">Xlarge (xl)</Label>
      <Input
        type="text"
        inputSize="xl"
        id="err-2"
        placeholder="Placeholder"
        error
      />
      <Hint error>Error message</Hint>
    </div>
  </div>
);

export default Example;
