/* eslint-disable no-console */
import * as React from 'react';
import { create } from 'react-test-renderer';

import { TabLink } from '../tab-link';

const TestLink = ({ children, ...props }: { children: string }) => (
  <a id="test-link" {...props}>
    {children}
  </a>
);

describe('Nav - TabLink', () => {
  test('renders as an anchor by default', () => {
    const tabLink = create(<TabLink href="#">Sample link</TabLink>);

    expect(tabLink).toMatchSnapshot();
  });

  test('renders as a button', () => {
    const tabLink = create(
      <TabLink element="button" onClick={() => console.log('clicked')}>
        Sample link
      </TabLink>
    );

    expect(tabLink).toMatchSnapshot();
  });

  test('renders as a component', () => {
    const tabLink = create(<TabLink element={TestLink}>Sample link</TabLink>);

    expect(tabLink).toMatchSnapshot();
  });

  describe('renders as active', () => {
    test('as an anchor', () => {
      const tabLink = create(<TabLink href="#">Sample link</TabLink>);

      expect(tabLink).toMatchSnapshot();
    });

    test('as a button', () => {
      const tabLink = create(
        <TabLink active element="button" onClick={() => console.log('clicked')}>
          Sample link
        </TabLink>
      );

      expect(tabLink).toMatchSnapshot();
    });

    test('as a component', () => {
      const tabLink = create(
        <TabLink active element={TestLink}>
          Sample link
        </TabLink>
      );

      expect(tabLink).toMatchSnapshot();
    });
  });
});
