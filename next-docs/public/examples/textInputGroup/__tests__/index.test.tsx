/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import AccessValues from '../AccessValues';
import Default from '../Default';
import EventListenerSelect from '../EventListenerSelect';
import MultiSelect from '../MultiSelect';
import Rtl from '../Rtl';
import SingleSelect from '../SingleSelect';
import SingleSelectRtl from '../SingleSelectRtl';
import Sizes from '../Sizes';
import Types from '../Types';
import Vertical from '../Vertical';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('TextInputGroup', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders vertical', () => {
    const testRenderer = renderer.create(renderWithTheme(<Vertical />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders RTL', () => {
    const testRenderer = renderer.create(renderWithTheme(<Rtl />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders different types', () => {
    const testRenderer = renderer.create(renderWithTheme(<Types />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders and allows access to DOM and values for text field', () => {
    const testRenderer = renderer.create(renderWithTheme(<AccessValues />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders single select', () => {
    const testRenderer = renderer.create(renderWithTheme(<SingleSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders multi select', () => {
    const testRenderer = renderer.create(renderWithTheme(<MultiSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders single select RTL', () => {
    const testRenderer = renderer.create(renderWithTheme(<SingleSelectRtl />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders and allows event listeners for the select fields', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<EventListenerSelect />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
