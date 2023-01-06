import { RadioButton } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <RadioButton
      readOnly
      name="readOnly"
      id="readOnly1"
      value="readOnly1"
      label="ReadOnly"
      ariaLabel="ReadOnly"
    />
    <RadioButton
      readOnly
      checked
      name="readOnly"
      id="readOnly2"
      value="readOnly2"
      label="ReadOnly Checked"
      ariaLabel="ReadOnly Checked"
    />
  </>
);

export default Example;
