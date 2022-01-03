/**
 * @jest-environment jsdom
 */

import React from 'react';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer from 'react-test-renderer';

import Default from '../Default';
import Calendar from '../Calendar';
import CustomContent from '../CustomContent';
import DeepTable from '../DeepTable';
import ExpandedRow from '../ExpandedRow';
import MiniMap from '../MiniMap';
import Sorting from '../Sorting';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Table', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Calendar', () => {
    const testRenderer = renderer.create(renderWithTheme(<Calendar />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Custom Content', () => {
    const testRenderer = renderer.create(renderWithTheme(<CustomContent />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders Deep Table', () => {
    const testRenderer = renderer.create(renderWithTheme(<DeepTable />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Expanded Row', () => {
    const testRenderer = renderer.create(renderWithTheme(<ExpandedRow />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Mini Map', () => {
    const testRenderer = renderer.create(renderWithTheme(<MiniMap />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders with Sorting', () => {
    const testRenderer = renderer.create(renderWithTheme(<Sorting />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
