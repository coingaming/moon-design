import React from 'react';
import {
  RadioButtonLabel,
  RadioButtonInput,
  ListItem,
} from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col">
    <h4 className="mb-2">Please select your age:</h4>
    <div className="mb-2">
      <RadioButtonLabel id="age1">
        <ListItem
          backgroundColor="goku.100"
          elementRight={
            <RadioButtonInput name="age" ariaLabel="0 - 30" id="age1" />
          }
        >
          0 - 30
        </ListItem>
      </RadioButtonLabel>
    </div>
    <div className="mb-2">
      <RadioButtonLabel id="age2">
        <ListItem
          backgroundColor="goku.100"
          elementRight={
            <RadioButtonInput name="age" ariaLabel="0 - 30" id="age2" />
          }
        >
          31 - 60
        </ListItem>
      </RadioButtonLabel>
    </div>
    <div className="mb-2">
      <RadioButtonLabel id="age3">
        <ListItem
          backgroundColor="goku.100"
          elementRight={
            <RadioButtonInput name="age" ariaLabel="61 - 100" id="age3" />
          }
        >
          31 - 60
        </ListItem>
      </RadioButtonLabel>
    </div>
  </div>
);

export default Example;
