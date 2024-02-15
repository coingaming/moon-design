import { Input, Label, Hint } from '@heathmont/moon-core-tw';
import { GenericInfo } from '@heathmont/moon-icons-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <Label htmlFor="disabled-state" disabled>
        Label
      </Label>
      <Input type="text" placeholder="Disabled" id="disabled-state" disabled />
      <Hint disabled>Informative message holder</Hint>
    </div>
    <div className="w-full">
      <Label htmlFor="error-state">Label</Label>
      <Input type="text" placeholder="Error" id="error-state" error />
      <Hint error>
        <GenericInfo />
        Informative message holder
      </Hint>
    </div>
    <div className="w-full">
      <Label htmlFor="readonly-state">Label</Label>
      <Input
        type="text"
        placeholder="Placeholder"
        id="readonly-state"
        value="Read only text"
        readOnly
      />
      <Hint>Informative message holder</Hint>
    </div>
  </div>
);

export default Example;
