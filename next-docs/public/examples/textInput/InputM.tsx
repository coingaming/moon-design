import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col gap-4">
    <TextInput
      type="text"
      inputSize="medium"
      label="With label"
      placeholder="Placeholder"
    />

    <TextInput
      type="text"
      inputSize="medium"
      placeholder="Placeholder: Without label"
    />

    <TextInput
      type="text"
      inputSize="medium"
      label="With hint below"
      placeholder="Placeholder"
      hintText="Informative message holder"
    />

    <div className="flex gap-4 mb-4 items-end">
      <TextInput
        type="text"
        inputSize="medium"
        label="Disabled"
        placeholder="Placeholder"
        hintText="Informative message holder"
        disabled
      />

      <TextInput
        type="text"
        label="Error"
        placeholder="Placeholder"
        inputSize="medium"
        hintText="Informative message holder"
        isError
        backgroundColor="goku.10"
      />
    </div>

    <TextInput
      type="text"
      inputSize="medium"
      label="Input with background color"
      placeholder="Placeholder"
      hintText="Informative message holder"
      backgroundColor="goku.10"
    />

    <div className="pt-4">
      <p className="text-red-600">
        !!! Text input medium size could have inner label only
      </p>
    </div>
  </div>
);

export default Example;
