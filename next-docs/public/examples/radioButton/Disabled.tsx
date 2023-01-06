import { RadioButton } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <RadioButton
      disabled
      name="disabled"
      id="disabled1"
      value="disabled1"
      label="Disabled"
      ariaLabel="Disabled"
    />
    <RadioButton
      disabled
      checked
      name="disabled"
      id="disabled2"
      value="disabled2"
      label="Disabled Checked"
      ariaLabel="Disabled Checked"
    />
  </>
);
export default Example;
