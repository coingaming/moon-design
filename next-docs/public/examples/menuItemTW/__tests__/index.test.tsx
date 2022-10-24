/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import AsLink from '../AsLink';
import Checkbox from '../Checkbox';
import CustomWidth from '../CustomWidth';
import ExpandCollapse from '../ExpandCollapse';
import MultiLine from '../MultiLine';
import MultiTitle from '../MultiTitle';
import Radio from '../Radio';
import WithIcon from '../WithIcon';
import WithMeta from '../WithMeta';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Loader', () => {
  it('renders default', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders as link', () => {
    const testRenderer = renderer.create(renderWithTheme(<AsLink />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with checkbox', () => {
    const testRenderer = renderer.create(renderWithTheme(<Checkbox />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with radio', () => {
    const testRenderer = renderer.create(renderWithTheme(<Radio />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders custom width', () => {
    const testRenderer = renderer.create(renderWithTheme(<CustomWidth />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders custom width', () => {
    const testRenderer = renderer.create(renderWithTheme(<CustomWidth />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders expand and collapse', () => {
    const testRenderer = renderer.create(renderWithTheme(<ExpandCollapse />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders multi line', () => {
    const testRenderer = renderer.create(renderWithTheme(<MultiLine />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders multi title', () => {
    const testRenderer = renderer.create(renderWithTheme(<MultiTitle />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with icon', () => {
    const testRenderer = renderer.create(renderWithTheme(<WithIcon />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with meta', () => {
    const testRenderer = renderer.create(renderWithTheme(<WithMeta />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
