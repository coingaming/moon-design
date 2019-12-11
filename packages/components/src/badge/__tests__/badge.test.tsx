import * as React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/sportsbet-themes';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

import { Badge } from '../badge';

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
      renderWithTheme(<Badge backgroundColor="red">Red background badge</Badge>)
    );

    expect(badge).toMatchSnapshot();
  });
});
