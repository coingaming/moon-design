/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';
import Default from '../Default';
import AsLink from '../AsLink';
import Checkbox from '../Checkbox';
import ExpandCollapse from '../ExpandCollapse';
import MultiLine from '../MultiLine';
import MultiTitle from '../MultiTitle';
import Radio from '../Radio';
import WithIcon from '../WithIcon';
import WithMeta from '../WithMeta';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Loader in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders AsLink', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<AsLink />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Checkbox', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Checkbox />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Radio', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Radio />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders ExpandCollapse', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<ExpandCollapse />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders MultiLine', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<MultiLine />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders MultiTitle', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<MultiTitle />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders WithIcon', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<WithIcon />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders WithMeta', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<WithMeta />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Loader in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders AsLink', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<AsLink />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Checkbox', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Checkbox />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Radio', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Radio />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders ExpandCollapse', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<ExpandCollapse />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders MultiLine', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<MultiLine />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders MultiTitle', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<MultiTitle />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders WithIcon', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithIcon />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders WithMeta', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<WithMeta />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Loader in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders AsLink', () => {
    const testRenderer = renderer.create(renderWithRtl(<AsLink />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Checkbox', () => {
    const testRenderer = renderer.create(renderWithRtl(<Checkbox />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Radio', () => {
    const testRenderer = renderer.create(renderWithRtl(<Radio />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders ExpandCollapse', () => {
    const testRenderer = renderer.create(renderWithRtl(<ExpandCollapse />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders MultiLine', () => {
    const testRenderer = renderer.create(renderWithRtl(<MultiLine />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders MultiTitle', () => {
    const testRenderer = renderer.create(renderWithRtl(<MultiTitle />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders WithIcon', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithIcon />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders WithMeta', () => {
    const testRenderer = renderer.create(renderWithRtl(<WithMeta />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
