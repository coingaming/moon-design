import React from 'react';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import TextInput from '../TextInput';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('TextInput', () => {
  test('renders correctly with `text` type by default', () => {
    const textInput = create(
      renderWithTheme(<TextInput label="Example Input" />)
    );

    expect(textInput).toMatchSnapshot();
  });

  test('renders correctly without a label', () => {
    const textInput = create(
      renderWithTheme(<TextInput placeholder="Enter code" />)
    );

    expect(textInput).toMatchSnapshot();
  });

  test('renders correctly for other types', () => {
    const textInput = create(
      renderWithTheme(
        <fieldset>
          <TextInput label="Text" type="text" required />
          <TextInput label="Date" type="date" required />
          <TextInput label="Email" type="email" required />
          <TextInput label="Number" type="number" required />
          <TextInput label="Password" type="password" required />
          <TextInput label="Search" type="search" required />
          <TextInput label="Telephone" type="tel" required />
          <TextInput label="URL" type="url" required />
        </fieldset>
      )
    );
    expect(textInput).toMatchSnapshot();
  });

  test('renders as `disabled` when defined', () => {
    const textInput = create(
      renderWithTheme(
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
      )
    );
    expect(textInput).toMatchSnapshot();
  });

  test('renders as an `error` when defined', () => {
    const textInput = create(
      renderWithTheme(
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
      )
    );
    expect(textInput).toMatchSnapshot();
  });

  test('renders with rounded prop', () => {
    const textInput = create(
      renderWithTheme(<TextInput rounded label="Text" type="text" error />)
    );
    expect(textInput).toMatchSnapshot();
  });
});
