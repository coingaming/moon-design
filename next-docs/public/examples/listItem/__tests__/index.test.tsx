/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';

import SingleLineItem from '../SingleLineItem';
import SingleLineItemIcon from '../SingleLineItemIcon';
import SingleLineItemSize from '../SingleLineItemSize';
import TwoLineItems from '../TwoLineItems';
import TwoLineItemsCheckbox from '../TwoLineItemsCheckbox';
import TwoLineItemsIcon from '../TwoLineItemsIcon';
import TwoLineItemsSize from '../TwoLineItemsSize';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('List Item', () => {
  it('renders Single Line Item', () => {
    const testRenderer = renderer.create(renderWithTheme(<SingleLineItem />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Single Line Item with Icon', () => {
    const testRenderer = renderer.create(renderWithTheme(<SingleLineItemIcon />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Single Line Item with differen Sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<SingleLineItemSize />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Two Line Items', () => {
    const testRenderer = renderer.create(renderWithTheme(<TwoLineItems />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Two Line Items with Checkbox', () => {
    const testRenderer = renderer.create(renderWithTheme(<TwoLineItemsCheckbox />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Two Line Items with Icon', () => {
    const testRenderer = renderer.create(renderWithTheme(<TwoLineItemsIcon />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Two Line Items with different Sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<TwoLineItemsSize />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
