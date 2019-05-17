import * as React from 'react';
import { create } from 'react-test-renderer';
import { Switch } from '../';

describe('Switch', () => {
  test('renders by default', () => {
    const checkbox = create(<Switch />);

    expect(checkbox).toMatchSnapshot();
  });

  test('renders as checked', () => {
    const checkbox = create(<Switch checked />);

    expect(checkbox).toMatchSnapshot();
  });
});
