/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Popover', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    }) as any;
  });

  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
