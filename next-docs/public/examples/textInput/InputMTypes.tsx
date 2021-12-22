import React from 'react';

import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col gap-4">
    <TextInput type="date" label="Date" inputSize="xlarge" />
    <TextInput type="datetime-local" inputSize="xlarge" label="Date and time" />

    <TextInput
      type="email"
      inputSize="xlarge"
      label="Email"
      placeholder="e.g. jake.weary@sportsbet.io"
    />

    <TextInput
      type="number"
      inputSize="xlarge"
      label="Number"
      placeholder="e.g. 1234"
      required
    />

    <TextInput
      type="password"
      inputSize="xlarge"
      placeholder="Please enter your account password"
      label="Password"
      showPasswordText="Show"
    />

    <TextInput
      type="search"
      inputSize="xlarge"
      label="Search"
      placeholder="e.g. EPL"
      required
    />

    <TextInput
      type="tel"
      inputSize="xlarge"
      label="Telephone"
      placeholder="e.g. +372 123 4567"
    />

    <TextInput type="time" inputSize="xlarge" label="Time" />

    <TextInput
      type="url"
      inputSize="xlarge"
      label="URL"
      placeholder="e.g. https://sportsbet.io"
    />
  </div>
);

export default Example;
