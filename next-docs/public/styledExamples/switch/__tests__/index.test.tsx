/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import Sizes from '../Sizes';
import Theme from '../Theme';
import Disabled from "../Disabled";
import Buttons from "../Buttons";

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Switch', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });


  it('renders different Sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Theme variant', () => {
    const testRenderer = renderer.create(renderWithTheme(<Theme />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Disabled state', () => {
    const testRenderer = renderer.create(renderWithTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Buttons', () => {
    const testRenderer = renderer.create(renderWithTheme(<Buttons />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
