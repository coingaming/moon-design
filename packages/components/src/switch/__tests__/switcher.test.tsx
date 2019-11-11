import * as React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import { Switch } from '../switch';

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
