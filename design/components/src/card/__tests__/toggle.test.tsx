import * as React from 'react';
import { create } from 'react-test-renderer';
import { CardToggle } from '../';

describe('CardToggle', () => {
  test('renders with settings icon by default', () => {
    const toggle = create(<CardToggle />);

    expect(toggle).toMatchSnapshot();
  });

  test('renders with back icon', () => {
    const toggle = create(<CardToggle back />);

    expect(toggle).toMatchSnapshot();
  });
});
