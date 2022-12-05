/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  moonDesignLight,
  moonDesignDark,
  ThemeProvider,
} from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import LargeWithOptionalExtras from '../LargeWithOptionalExtras';
import Default from '../Default';
import CustomHeight from '../CustomHeight';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

type BottomsheetPortal = (
  children: React.ReactNode,
  container: Element | DocumentFragment,
  key?: string | null | undefined
) => React.ReactPortal;

describe('Bottomsheet', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element) as BottomsheetPortal;
  });

  it('renders default', async () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    testRenderer.root.findAllByType('button')[0].props.onClick();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders default dark', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    testRenderer.root.findAllByType('button')[0].props.onClick();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with a form and drag handle and shadow and backdrop', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<LargeWithOptionalExtras />)
    );
    testRenderer.root.findAllByType('button')[0].props.onClick();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with custom height & table', () => {
    const testRenderer = renderer.create(renderWithTheme(<CustomHeight />));
    testRenderer.root.findAllByType('button')[0].props.onClick();
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
