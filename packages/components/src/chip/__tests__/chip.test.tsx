import React from 'react';
import 'jest-styled-components';
import IconProfile from '@heathmont/moon-assets/src/icons/IconProfile';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import { create } from 'react-test-renderer';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

const renderWithThemeRTL = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>
    <div dir="rtl">{component}</div>
  </ThemeProvider>
);

import Chip from '../Chip';

describe('Chip', () => {
  test('renders correctly', () => {
    const chip = create(renderWithTheme(<Chip>Chip</Chip>));

    expect(chip).toMatchSnapshot();
  });

  test('renders RTL correctly', () => {
    const chip = create(renderWithThemeRTL(<Chip>Chip</Chip>));

    expect(chip).toMatchSnapshot();
  });

  test('renders correctly with active status', () => {
    const chip = create(renderWithTheme(<Chip active>Active</Chip>));

    expect(chip).toMatchSnapshot();
  });

  test('renders correctly with small size', () => {
    const chip = create(renderWithTheme(<Chip size="small">Small</Chip>));

    expect(chip).toMatchSnapshot();
  });

  test('renders correctly default size', () => {
    const chip = create(renderWithTheme(<Chip>Medium</Chip>));

    expect(chip).toMatchSnapshot();
  });

  test('renders correctly with Left Icon', () => {
    const chip = create(
      renderWithTheme(
        <Chip iconLeft={<IconProfile />}>Chip with left icon</Chip>
      )
    );

    expect(chip).toMatchSnapshot();
  });

  test('renders correctly with Right Icon', () => {
    const chip = create(
      renderWithTheme(
        <Chip iconRight={<IconProfile />}>Chip with right icon</Chip>
      )
    );

    expect(chip).toMatchSnapshot();
  });

  test('renders correctly with Right and left Icons', () => {
    const chip = create(
      renderWithTheme(
        <Chip iconLeft={<IconProfile />} iconRight={<IconProfile />}>
          Chip with icons on both sides
        </Chip>
      )
    );

    expect(chip).toMatchSnapshot();
  });
});
