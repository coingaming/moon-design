import React from 'react';
import { TextInput } from '@heathmont/moon-core';

const Example = () => (
  <div className="flex flex-col gap-4">
    <TextInput type="date" label="Date" inputSize="large" />
    <TextInput type="datetime-local" inputSize="large" label="Date and time" />

    <TextInput
      type="email"
      inputSize="large"
      label="Email"
      placeholder="e.g. jake.weary@sportsbet.io"
    />

    <TextInput
      type="number"
      inputSize="large"
      label="Number"
      placeholder="e.g. 1234"
      required
    />

    <TextInput
      type="password"
      inputSize="large"
      placeholder="Please enter your account password"
      label="Password"
      showPasswordText="Show"
    />

    <TextInput
      type="search"
      inputSize="large"
      label="Search"
      placeholder="e.g. EPL"
      required
    />

    <TextInput
      type="tel"
      inputSize="large"
      label="Telephone"
      placeholder="e.g. +372 123 4567"
    />

    <TextInput type="time" inputSize="large" label="Time" />

    <TextInput
      type="url"
      inputSize="large"
      label="URL"
      placeholder="e.g. https://sportsbet.io"
    />
  </div>
);

export default Example;
