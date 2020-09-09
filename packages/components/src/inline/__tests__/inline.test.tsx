import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

import Inline from '../Inline';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

const TestItems = () => (
  <>
    <button type="button">Button 1</button>
    <button type="button">Button 2</button>
    <button type="button">Button 3</button>
  </>
);

describe('Inline', () => {
  test('renders with `default` spacing', () => {
    const inline = create(
      renderWithTheme(
        <Inline>
          <TestItems />
        </Inline>
      )
    );

    expect(inline).toMatchSnapshot();
  });

  test('renders with adjusted spacing', () => {
    const inline = create(
      renderWithTheme(
        <Inline space={30}>
          <TestItems />
        </Inline>
      )
    );

    expect(inline).toMatchSnapshot();
  });

  test('renders with custom font-size', () => {
    const inline = create(
      renderWithTheme(
        <Inline fontSize={16}>
          <TestItems />
        </Inline>
      )
    );

    expect(inline).toMatchSnapshot();
  });

  test('renders child list items correctly', () => {
    const inline = create(
      renderWithTheme(
        <Inline as="ul">
          <li>
            <button type="button">Button 1</button>
          </li>
          <li>
            <button type="button">Button 2</button>
          </li>
          <li>
            <button type="button">Button 3</button>
          </li>
        </Inline>
      )
    );

    expect(inline).toMatchSnapshot();
  });
});
