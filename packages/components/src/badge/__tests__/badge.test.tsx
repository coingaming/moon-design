import * as React from 'react';
import { create } from 'react-test-renderer';

import { Badge } from '../badge';

describe('Badge', () => {
  test('renders correctly', () => {
    const badge = create(<Badge>Active</Badge>);

    expect(badge).toMatchSnapshot();
  });

  test('renders correctly with color', () => {
    const badge = create(<Badge color="red">Red banner</Badge>);

    expect(badge).toMatchSnapshot();
  });

  test('renders correctly with background color', () => {
    const badge = create(
      <Badge backgroundColor="red">Red background banner</Badge>
    );

    expect(badge).toMatchSnapshot();
  });
});
