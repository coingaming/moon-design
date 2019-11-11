/* eslint-disable no-console */
import * as React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

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

  test('renders as active', () => {
    const tabLink = create(<TabLink className="active">Sample link</TabLink>);

    expect(tabLink).toMatchSnapshot();
  });

  test('renders as a component', () => {
    const tabLink = create(<TabLink as={TestLink}>Sample link</TabLink>);

    expect(tabLink).toMatchSnapshot();
  });

  test('renders as active', () => {
    const tabLink = create(<TabLink href="#">Sample link</TabLink>);

    expect(tabLink).toMatchSnapshot();
  });
});
