import * as React from 'react';
import { create } from 'react-test-renderer';
import { FileInput } from '../';

describe('File Input', () => {
  test('renders a file input with default label', () => {
    const fileInput = create(<FileInput />);

    expect(fileInput).toMatchSnapshot();
  });

  test('renders a file input with custom label', () => {
    const fileInput = create(<FileInput label="Upload photo" />);

    expect(fileInput).toMatchSnapshot();
  });

  test('renders a file input with custom placeholder', () => {
    const fileInput = create(<FileInput placeholder="ID, passport, etc." />);

    expect(fileInput).toMatchSnapshot();
  });

  test('renders a file input with custom label and placeholder', () => {
    const fileInput = create(
      <FileInput label="Upload photo" placeholder="ID, passport, etc." />
    );

    expect(fileInput).toMatchSnapshot();
  });

  test('renders as error', () => {
    const fileInput = create(<FileInput error />);

    expect(fileInput).toMatchSnapshot();
  });
});
