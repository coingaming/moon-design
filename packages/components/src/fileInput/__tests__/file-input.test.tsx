import React from 'react';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import FileInput from '../FileInput';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

describe('File Input', () => {
  test('renders a file input with default placeholder', () => {
    const fileInput = create(renderWithTheme(<FileInput id="fileInput1" />));

    expect(fileInput).toMatchSnapshot();
  });

  test('renders a file input with custom placeholder', () => {
    const fileInput = create(
      renderWithTheme(
        <FileInput id="fileInput2" placeholder="Choose a photo…" />
      )
    );

    expect(fileInput).toMatchSnapshot();
  });

  test('renders a file input with custom label', () => {
    const fileInput = create(
      renderWithTheme(<FileInput id="fileInput3" label="ID, passport, etc." />)
    );

    expect(fileInput).toMatchSnapshot();
  });

  test('renders a file input with custom label and placeholder', () => {
    const fileInput = create(
      renderWithTheme(
        <FileInput
          id="fileInput4"
          label="Upload photo"
          placeholder="ID, passport, etc."
        />
      )
    );

    expect(fileInput).toMatchSnapshot();
  });

  test('renders as error', () => {
    const fileInput = create(
      renderWithTheme(<FileInput id="fileInput5" error />)
    );

    expect(fileInput).toMatchSnapshot();
  });
});
