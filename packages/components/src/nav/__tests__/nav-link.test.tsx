/* eslint-disable no-console */
import * as React from 'react';
import { create } from 'react-test-renderer';

import { NavLink } from '../nav-link';

const TestLink = ({ children, ...props }: { children: string }) => (
  <a id="test-link" {...props}>
    {children}
  </a>
);

describe('Nav - NavLink', () => {
  test('renders as an anchor by default', () => {
    const navLink = create(<NavLink href="#">Sample link</NavLink>);

    expect(navLink).toMatchSnapshot();
  });

  test('renders as a button', () => {
    const navLink = create(
      <NavLink element="button" onClick={() => console.log('clicked')}>
        Sample link
      </NavLink>
    );

    expect(navLink).toMatchSnapshot();
  });

  test('renders as a component', () => {
    const navLink = create(<NavLink element={TestLink}>Sample link</NavLink>);

    expect(navLink).toMatchSnapshot();
  });

  describe('renders as active', () => {
    test('as an anchor', () => {
      const navLink = create(<NavLink href="#">Sample link</NavLink>);

      expect(navLink).toMatchSnapshot();
    });

    test('as a button', () => {
      const navLink = create(
        <NavLink active element="button" onClick={() => console.log('clicked')}>
          Sample link
        </NavLink>
      );

      expect(navLink).toMatchSnapshot();
    });

    test('as a component', () => {
      const navLink = create(
        <NavLink active element={TestLink}>
          Sample link
        </NavLink>
      );

      expect(navLink).toMatchSnapshot();
    });
  });
});
