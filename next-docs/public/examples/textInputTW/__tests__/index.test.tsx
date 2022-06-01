/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import Bg from '../Bg';
import Date from '../Date';
import DateTime from '../DateTime';
import Disabled from '../Disabled';
import Email from '../Email';
import Error from '../Error';
import Hint from '../Hint';
import Number from '../Number';
import Password from '../Password';
import Readonly from '../Readonly';
import Search from '../Search';
import Sizes from '../Sizes';
import SizesRTL from '../SizesRTL';
import Telephone from '../Telephone';
import Time from '../Time';
import Url from '../Url';
import WithoutLabel from '../WithoutLabel';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('TextInput: type Date', () => {
  it('renders different sizes', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sizes />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders RTL', () => {
    const testRenderer = renderer.create(renderWithTheme(<SizesRTL />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders without label', () => {
    const testRenderer = renderer.create(renderWithTheme(<WithoutLabel />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders with hint', () => {
    const testRenderer = renderer.create(renderWithTheme(<Hint />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders disabled', () => {
    const testRenderer = renderer.create(renderWithTheme(<Disabled />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders error', () => {
    const testRenderer = renderer.create(renderWithTheme(<Error />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('supports background colour', () => {
    const testRenderer = renderer.create(renderWithTheme(<Bg />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders readOnly', () => {
    const testRenderer = renderer.create(renderWithTheme(<Readonly />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Date', () => {
    const testRenderer = renderer.create(renderWithTheme(<Date />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders DateTime', () => {
    const testRenderer = renderer.create(renderWithTheme(<DateTime />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Email', () => {
    const testRenderer = renderer.create(renderWithTheme(<Email />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Number', () => {
    const testRenderer = renderer.create(renderWithTheme(<Number />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Password', () => {
    const testRenderer = renderer.create(renderWithTheme(<Password />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Search', () => {
    const testRenderer = renderer.create(renderWithTheme(<Search />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Telephone', () => {
    const testRenderer = renderer.create(renderWithTheme(<Telephone />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Time', () => {
    const testRenderer = renderer.create(renderWithTheme(<Time />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Url', () => {
    const testRenderer = renderer.create(renderWithTheme(<Url />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
