import * as React from 'react';
import { create } from 'react-test-renderer';
import { TextInput } from '../';

describe('TextInput', () => {
  test('renders correctly with `text` type by default', () => {
    const textInput = create(<TextInput label="Example Input" />);

    expect(textInput).toMatchSnapshot();
  });

  test('renders with label above `date` input by default', () => {
    const textInput = create(<TextInput label="Example Input" type="date" />);

    expect(textInput).toMatchSnapshot();
  });

  test('renders with label above input when defined', () => {
    const textInput = create(
      <fieldset>
        <TextInput label="Text" type="text" labelBlock required />
        <TextInput label="Email" type="email" labelBlock required />
        <TextInput label="Number" type="number" labelBlock required />
        <TextInput label="Password" type="password" labelBlock required />
        <TextInput label="Search" type="search" labelBlock required />
        <TextInput label="Telephone" type="tel" labelBlock required />
        <TextInput label="URL" type="url" labelBlock required />
      </fieldset>
    );
    expect(textInput).toMatchSnapshot();
  });

  test('renders as `disabled` when defined', () => {
    const textInput = create(
      <fieldset>
        <TextInput label="Text" type="text" disabled />
        <TextInput label="Date" type="date" disabled />
        <TextInput label="Email" type="email" disabled />
        <TextInput label="Number" type="number" disabled />
        <TextInput label="Password" type="password" disabled />
        <TextInput label="Search" type="search" disabled />
        <TextInput label="Telephone" type="tel" disabled />
        <TextInput label="URL" type="url" disabled />
      </fieldset>
    );
    expect(textInput).toMatchSnapshot();
  });

  test('renders as an `error` when defined', () => {
    const textInput = create(
      <fieldset>
        <TextInput label="Text" type="text" error />
        <TextInput label="Date" type="date" error />
        <TextInput label="Email" type="email" error />
        <TextInput label="Number" type="number" error />
        <TextInput label="Password" type="password" error />
        <TextInput label="Search" type="search" error />
        <TextInput label="Telephone" type="tel" error />
        <TextInput label="URL" type="url" error />
      </fieldset>
    );
    expect(textInput).toMatchSnapshot();
  });
});
