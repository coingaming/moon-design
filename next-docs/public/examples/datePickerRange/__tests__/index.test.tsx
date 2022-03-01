/**
 * @jest-environment jsdom
 */

import React from 'react';
import { jest } from '@jest/globals';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';
import renderer, { act } from 'react-test-renderer';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import Default from '../Default';
import RangeCalendar from '../RangeCalendar';
import RangeCalendarDisabled from '../RangeCalendarDisabled';
import RangeCalendarDisabled2 from '../RangeCalendarDisabled2';
import RangeCalendarDisabled3 from '../RangeCalendarDisabled3';
import RangeCalendarDisabled4 from '../RangeCalendarDisabled4';
import RangeCalendarOneMonth from '../RangeCalendarOneMonth';
import RangeCalendarOnlyDate from '../RangeCalendarOnlyDate';
import RangeCalendarRtl from '../RangeCalendarRtl';
import RangeCalendarWithChip from '../RangeCalendarWithChip';
import RangeCalendarWithoutFooter from '../RangeCalendarWithoutFooter';
import RangeCalendarWithPeriod from '../RangeCalendarWithPeriod';

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
});

describe('RangeCalendar', () => {
  const testRenderer = renderer.create(renderWithTheme(<RangeCalendar />));
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

  it('select day', () => {
    act(() => {
      const days = testInstance.findAllByProps({
        ['test-id']: 'day',
      });
      const buttons = testInstance.findAllByType('button');
      days[20].props.onClick();
      days[27].props.onClick();
      buttons[1].props.onClick();
    });

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('canel', () => {
    act(() => {
      const button = testInstance.findByType('button');
      button.props.onClick();
    });

    act(() => {
      const buttons = testInstance.findAllByType('button');
      buttons[2].props.onClick();
    });

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('RangeCalendar: with period', () => {
  it('renders', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<RangeCalendarWithPeriod />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('RangeCalendar: one month', () => {
  it('renders', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<RangeCalendarOneMonth />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('RangeCalendar: without footer', () => {
  it('renders', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<RangeCalendarWithoutFooter />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('RangeCalendar: only date', () => {
  it('renders', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<RangeCalendarOnlyDate />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('RangeCalendar: RTL', () => {
  it('renders', () => {
    const testRenderer = renderer.create(
      renderWithThemeRTL(<RangeCalendarRtl />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('RangeCalendar: without input', () => {
  const testRenderer = renderer.create(
    renderWithTheme(<RangeCalendarWithChip />)
  );
  const testInstance = testRenderer.root;
  it('renders', () => {
    act(() => {
      const button = testInstance.findByType('button');
      button.props.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('show month select', () => {
    act(() => {
      const monthSelect = testInstance.findAllByProps({
        ['test-id']: 'month-select',
      });
      monthSelect[0].props.onClick();
    });

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('show years select', () => {
    act(() => {
      const yearsSelect = testInstance.findAllByProps({
        ['test-id']: 'year-select',
      });
      yearsSelect[0].props.onClick();
    });

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('RangeCalendar: disabled day', () => {
  it('renders', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<RangeCalendarDisabled />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('RangeCalendar: disabled days', () => {
  it('renders', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<RangeCalendarDisabled2 />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('RangeCalendar: disabled range', () => {
  it('renders', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<RangeCalendarDisabled3 />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('RangeCalendar: disabled inner range', () => {
  it('renders', () => {
    const testRenderer = renderer.create(
      renderWithTheme(<RangeCalendarDisabled4 />)
    );
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
