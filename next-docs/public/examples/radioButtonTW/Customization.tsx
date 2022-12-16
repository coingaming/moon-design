import { RadioButton } from '@heathmont/moon-core-tw';
import React from 'react';

const Example = () => (
  <>
    <RadioButton
      name="customization"
      value="customization1"
      label="Unchecked colour"
      className="border-roshi"
    />
    <RadioButton
      name="customization"
      value="customization2"
      label="All colours"
      className="border-krillin"
      color="border-chiChi"
    />
    <RadioButton
      name="customization"
      value="customization3"
      label="Checked colours"
      color="border-raditz"
    />
  </>
);

export default Example;
