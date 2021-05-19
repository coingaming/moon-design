import React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';

import Reel from '../Reel';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

// @ts-ignore
const items = Array.from({ length: 10 }, (v, i) => i);

describe('Reel', () => {
  test('renders with defaults', () => {
    const reel = create(
      renderWithTheme(
        <Reel>
          {items.map((item) => (
            <div key={item}>Item {item}</div>
          ))}
        </Reel>,
      ),
    );

    expect(reel).toMatchSnapshot();
  });

  test('renders with custom space', () => {
    const reel = create(
      renderWithTheme(
        <Reel space={30}>
          {items.map((item) => (
            <div key={item}>Item {item}</div>
          ))}
        </Reel>,
      ),
    );

    expect(reel).toMatchSnapshot();
  });

  test('renders child images correctly with custom height', () => {
    const reel = create(
      renderWithTheme(
        <Reel height="10vh">
          {items.map((item) => (
            <img key={item} alt={`Test ${item}`} src="" />
          ))}
        </Reel>,
      ),
    );

    expect(reel).toMatchSnapshot();
  });

  test('renders child list items correctly', () => {
    const reel = create(
      renderWithTheme(
        <Reel as="ul">
          {items.map((item) => (
            <li key={item}>Item {item}</li>
          ))}
        </Reel>,
      ),
    );

    expect(reel).toMatchSnapshot();
  });
});
