import { RadioButton } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <RadioButton disabled name="disabled" value="disabled1" label="Option 1" />
    <RadioButton
      disabled
      checked
      name="disabled"
      value="disabled2"
      label="Option 2"
    />
  </>
);
export default Example;
