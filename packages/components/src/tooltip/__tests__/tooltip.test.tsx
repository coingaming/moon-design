/* eslint-disable no-console */
import React from 'react';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import Tooltip from '../Tooltip';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

const Caption = () => <p>Hi, I'm a Tooltip</p>;
const testProps = { id: 'test-id' };

describe('Tooltip', () => {
  test('renders hidden and left-aligned by default', () => {
    const tooltip = create(
      renderWithTheme(
        <Tooltip {...testProps}>
          <Caption />
        </Tooltip>
      )
    );

    expect(tooltip).toMatchSnapshot();
  });

  test('renders as active when defined', () => {
    const tooltip = create(
      renderWithTheme(
        <Tooltip active {...testProps}>
          <Caption />
        </Tooltip>
      )
    );

    expect(tooltip).toMatchSnapshot();
  });

  describe('alignment', () => {
    test('right-aligned', () => {
      const tooltip = create(
        renderWithTheme(
          <Tooltip active align="right" {...testProps}>
            <Caption />
          </Tooltip>
        )
      );

      expect(tooltip).toMatchSnapshot();
    });
  });

  describe('renders with close button if onClose handler was passed', () => {
    test('closeable', () => {
      const tooltip = create(
        renderWithTheme(
          <Tooltip
            onClose={() => {
              console.log('Closed');
            }}
            {...testProps}
          >
            <Caption />
          </Tooltip>
        )
      );

      expect(tooltip).toMatchSnapshot();
    });
  });

  test('renders as an error', () => {
    const tooltip = create(
      renderWithTheme(
        <Tooltip active error {...testProps}>
          <Caption />
        </Tooltip>
      )
    );

    expect(tooltip).toMatchSnapshot();
  });
});
