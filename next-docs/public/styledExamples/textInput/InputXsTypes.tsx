import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col gap-4">
    <TextInput type="date" label="Date" inputSize="medium" />
    <TextInput type="datetime-local" inputSize="medium" label="Date and time" />

    <TextInput
      type="email"
      inputSize="medium"
      label="Email"
      placeholder="e.g. jake.weary@sportsbet.io"
    />

    <TextInput
      type="number"
      inputSize="medium"
      label="Number"
      placeholder="e.g. 1234"
      required
    />

    <TextInput
      type="password"
      inputSize="medium"
      placeholder="Please enter your account password"
      label="Password"
      showPasswordText="Show"
    />

    <TextInput
      type="search"
      inputSize="medium"
      label="Search"
      placeholder="e.g. EPL"
      required
    />

    <TextInput
      type="tel"
      inputSize="medium"
      label="Telephone"
      placeholder="e.g. +372 123 4567"
    />

    <TextInput type="time" inputSize="medium" label="Time" />

    <TextInput
      type="url"
      inputSize="medium"
      label="URL"
      placeholder="e.g. https://sportsbet.io"
    />
  </div>
);

export default Example;
