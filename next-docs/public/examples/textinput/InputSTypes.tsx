import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col gap-4">
    <TextInput type="date" label="Date" inputSize="small" />
    <TextInput type="datetime-local" inputSize="small" label="Date and time" />

    <TextInput
      type="email"
      inputSize="small"
      label="Email"
      placeholder="e.g. jake.weary@sportsbet.io"
    />

    <TextInput
      type="number"
      inputSize="small"
      label="Number"
      placeholder="e.g. 1234"
      required
    />

    <TextInput
      type="password"
      inputSize="small"
      placeholder="Please enter your account password"
      label="Password"
      showPasswordText="Show"
    />

    <TextInput
      type="search"
      inputSize="small"
      label="Search"
      placeholder="e.g. EPL"
      required
    />

    <TextInput
      type="tel"
      inputSize="small"
      label="Telephone"
      placeholder="e.g. +372 123 4567"
    />

    <TextInput type="time" inputSize="xsmall" label="Time" />

    <TextInput
      type="url"
      inputSize="small"
      label="URL"
      placeholder="e.g. https://sportsbet.io"
    />
  </div>
);

export default Example;
