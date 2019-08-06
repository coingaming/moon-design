import * as React from 'react';
import { create } from 'react-test-renderer';

import { Toggle } from '..';

describe('Toggle', () => {
  test('renders correctly', () => {
    const toggle = create(<Toggle />);

    expect(toggle).toMatchSnapshot();
  });

  test('positioned static when "topRight=false"', () => {
    const toggle = create(<Toggle topRight={false} />);

    expect(toggle).toMatchSnapshot();
  });
});
