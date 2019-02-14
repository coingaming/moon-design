import * as React from 'react';
import { create } from 'react-test-renderer';
import { Toggle } from '../';

describe('Toggle', () => {
  test('renders correctly', () => {
    const toggle = create(<Toggle />);

    expect(toggle).toMatchSnapshot();
  });
});
