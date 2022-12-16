import { RadioButton, RadioGroup } from '@heathmont/moon-core-tw';

const Example = () => (
  <RadioGroup
    className="flex flex-wrap items-center justify-around gap-2 w-full"
    defaultValue="radioButtonGroup1"
  >
    <RadioGroup.Item value="radioButtonGroup1">
      <RadioGroup.Indicator />
      <RadioGroup.Label>Option 1</RadioGroup.Label>
    </RadioGroup.Item>
    <RadioGroup.Item value="radioButtonGroup2">
      <RadioGroup.Indicator />
      <RadioGroup.Label>Option 2</RadioGroup.Label>
    </RadioGroup.Item>
  </RadioGroup>
);

export default Example;
