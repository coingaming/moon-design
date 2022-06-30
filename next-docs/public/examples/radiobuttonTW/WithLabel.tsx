import { RadioButton } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <RadioButton
      name="withLabel"
      value="withLabel1"
      label="Option 1"
      ariaLabel="Option 1"
      id="withLabel1"
    />
    <RadioButton
      name="withLabel"
      value="withLabel2"
      label="Option 2"
      ariaLabel="Option 2"
      id="withLabel2"
    />
    <RadioButton
      name="withLabel"
      value="withLabel3"
      label="Option 3"
      ariaLabel="Option 3"
      id="withLabel3"
    />
  </>
);

export default Example;
