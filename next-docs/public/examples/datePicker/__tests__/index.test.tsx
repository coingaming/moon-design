/**
 * @jest-environment jsdom
 */

import React from 'react';
import { jest } from '@jest/globals';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer, { act } from 'react-test-renderer';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import Default from '../Default';
import Calendar from '../Calendar';
import CalendarDisabledDay from '../CalendarDisabledDay';
import CalendarDisabledDays from '../CalendarDisabledDays';
import CalendarDisabledRange from '../CalendarDisabledRange';
import CalendarDisabledRange2 from '../CalendarDisabledRange2';

expect.extend({ toMatchDiffSnapshot });

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithThemeRTL = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>
    <div dir="rtl">{component}</div>
  </ThemeProvider>
);

beforeAll(() => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date(2021, 2, 2));
});

afterAll(() => {
  jest.useRealTimers();
});

describe('DatePicker', () => {
  it('renders', () => {
    const testRenderer = renderer.create(renderWithTheme(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('renders RTL', () => {
    const testRenderer = renderer.create(renderWithThemeRTL(<Default />));
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Calendar', () => {
  const testRenderer = renderer.create(renderWithTheme(<Calendar />));
  const testInstance = testRenderer.root;

  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('show calendar', () => {
    act(() => {
      const button = testInstance.findByType('button');
      button.props.onClick();
    });

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('show month select', () => {
    act(() => {
      const monthSelect = testInstance.findByProps({
        ['test-id']: 'month-select',
      });
      monthSelect.props.onClick();
    });

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('show years select', () => {
    act(() => {
      const yearsSelect = testInstance.findByProps({
        ['test-id']: 'year-select',
      });
      yearsSelect.props.onClick();
    });

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('select day', () => {
    act(() => {
      const days = testInstance.findAllByProps({
        ['test-id']: 'day',
      });
      days[20].props.onClick();
    });

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('hide calendar', () => {
    act(() => {
      const button = testInstance.findByType('button');
      button.props.onClick();
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      const days = testInstance.findAllByProps({
        ['test-id']: 'day',
      });
      days[20].props.onClick();
    });
    const updateTree = testRenderer.toJSON();

    expect(tree).toMatchDiffSnapshot(updateTree);
  });
});

describe('Calendar: disabled day', () => {
  it('renders', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<CalendarDisabledDay />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Calendar: disabled days', () => {
  it('renders', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<CalendarDisabledDays />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Calendar: disabled range', () => {
  it('renders', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<CalendarDisabledRange />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Calendar: disabled inner range', () => {
  it('renders', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<CalendarDisabledRange2 />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
