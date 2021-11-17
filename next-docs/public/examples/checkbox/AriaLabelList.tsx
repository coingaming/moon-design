import {
  RadioButton,
  RadioButtonLabel,
  RadioButtonInput,
} from '@heathmont/moon-core';
import { ListItem } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col">
    <RadioButton name="test" label="RadioButton" disabled />
    <RadioButton name="test" />
    <div className="mt-2 mb-2">
      <ListItem
        backgroundColor="goku.100"
        elementRight={<RadioButton name="test" />}
      >
        Single line item
      </ListItem>
    </div>
    <div>
      <RadioButtonLabel>
        <ListItem
          backgroundColor="goku.100"
          elementRight={<RadioButtonInput />}
        >
          Single line item
        </ListItem>
      </RadioButtonLabel>
    </div>
  </div>
);

export default Example;
