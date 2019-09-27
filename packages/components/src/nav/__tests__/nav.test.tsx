import * as React from 'react';
import { create } from 'react-test-renderer';

import { Nav, NavItem } from '../nav';

describe('Nav', () => {
  test('renders correctly', () => {
    const navLink = create(
      <Nav>
        {[1, 2, 3, 4].map(i => (
          <NavItem key={i}>
            Item
            {i}
          </NavItem>
        ))}
      </Nav>
    );

    expect(navLink).toMatchSnapshot();
  });
});
