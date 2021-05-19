import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

import Badge from '../Badge';

describe('Badge', () => {
  test('renders correctly', () => {
    const badge = create(renderWithTheme(<Badge>Active</Badge>));

    expect(badge).toMatchSnapshot();
  });

  test('renders correctly with color', () => {
    const badge = create(renderWithTheme(<Badge color="red">Red badge</Badge>));

    expect(badge).toMatchSnapshot();
  });

  test('renders correctly with background color', () => {
    const badge = create(
      renderWithTheme(<Badge backgroundColor="red">Red background badge</Badge>),
    );

    expect(badge).toMatchSnapshot();
  });

  test('renders correctly default size', () => {
    const badge = create(
      renderWithTheme(<Badge backgroundColor="red">Default size badge</Badge>),
    );

    expect(badge).toMatchSnapshot();
  });

  test('renders correctly small size', () => {
    const badge = create(
      renderWithTheme(
        <Badge backgroundColor="red" size="small">
          Default size badge
        </Badge>,
      ),
    );

    expect(badge).toMatchSnapshot();
  });
});
