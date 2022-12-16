import { RadioButton } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <RadioButton readOnly name="readOnly" value="readOnly1" label="Option 1" />
    <RadioButton
      readOnly
      checked
      name="readOnly"
      value="readOnly2"
      label="Option 2"
    />
  </>
);

export default Example;
