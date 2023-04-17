/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';
import Default from '../Default';
import InsetMultiSelect from '../InsetMultiSelect';
import InsetSelect from '../InsetSelect';
import InsetSelectStates from '../InsetSelectStates';
import MultiSelect from '../MultiSelect';
import OptionsVariants from '../OptionsVariants';
import Select from '../Select';
import SelectStates from '../SelectStates';
import TriggerElements from '../TriggerElements';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Select in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders InsetMultiSelect', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<InsetMultiSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders InsetSelect', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<InsetSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders InsetSelectStates', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<InsetSelectStates />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders MultiSelect', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<MultiSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders OptionsVariants', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<OptionsVariants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Select', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Select />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders SelectStates', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<SelectStates />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders TriggerElements', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<TriggerElements />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Select in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders InsetMultiSelect', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<InsetMultiSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders InsetSelect', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<InsetSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders InsetSelectStates', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<InsetSelectStates />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders MultiSelect', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<MultiSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders OptionsVariants', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<OptionsVariants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Select', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Select />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders SelectStates', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<SelectStates />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders TriggerElements', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<TriggerElements />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Select in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders InsetMultiSelect', () => {
    const testRenderer = renderer.create(renderWithRtl(<InsetMultiSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders InsetSelect', () => {
    const testRenderer = renderer.create(renderWithRtl(<InsetSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders InsetSelectStates', () => {
    const testRenderer = renderer.create(renderWithRtl(<InsetSelectStates />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders MultiSelect', () => {
    const testRenderer = renderer.create(renderWithRtl(<MultiSelect />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders OptionsVariants', () => {
    const testRenderer = renderer.create(renderWithRtl(<OptionsVariants />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Select', () => {
    const testRenderer = renderer.create(renderWithRtl(<Select />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders SelectStates', () => {
    const testRenderer = renderer.create(renderWithRtl(<SelectStates />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders TriggerElements', () => {
    const testRenderer = renderer.create(renderWithRtl(<TriggerElements />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
