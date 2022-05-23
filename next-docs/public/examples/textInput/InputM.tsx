import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col gap-4">
    <TextInput
      type="text"
      inputSize="xlarge"
      label="With label"
      placeholder="Placeholder"
    />

    <TextInput
      type="text"
      inputSize="xlarge"
      placeholder="Placeholder: Without label"
    />

    <TextInput
      type="text"
      inputSize="xlarge"
      label="With hint below"
      placeholder="Placeholder"
      hintText="Informative message holder"
    />

    <div className="flex gap-4 mb-4 items-end">
      <TextInput
        type="text"
        inputSize="xlarge"
        label="DisabledTW"
        placeholder="Placeholder"
        hintText="Informative message holder"
        disabled
      />

      <TextInput
        type="text"
        label="Error"
        placeholder="Placeholder"
        inputSize="xlarge"
        hintText="Informative message holder"
        isError
        backgroundColor="goku"
      />
    </div>

    <TextInput
      type="text"
      inputSize="xlarge"
      label="Input with background color"
      placeholder="Placeholder"
      hintText="Informative message holder"
      backgroundColor="goku"
    />

    <div className="pt-4">
      <p className="text-red-600">
        !!! Text input xlarge size could have inner label only
      </p>
    </div>
  </div>
);

export default Example;
