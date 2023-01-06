/**
 * @jest-environment jsdom
 */

import {
  moonDesignDark,
  moonDesignLight,
  ThemeProvider,
} from '@heathmont/moon-themes';
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Default from '../Default';
import Positions from '../Positions';
import Options from '../Options';
import Semantics from '../Semantics';
import Customization from '../Customization';
import AutoClose from '../AutoClose';

const renderWithLightTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

const renderWithDarkTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignDark}>{component}</ThemeProvider>
);

const renderWithRtl = (component: JSX.Element) => (
  <div dir="rtl">{component}</div>
);

describe('Snackbar in Light Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Default />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Positions', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Positions />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Options', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Options />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Semantics', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<Semantics />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders AutoClose', () => {
    const testRenderer = renderer.create(renderWithLightTheme(<AutoClose />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const testRenderer = renderer.create(
      renderWithLightTheme(<Customization />)
    );
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Snackbar in Dark Theme', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Default />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Positions', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Positions />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Options', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Options />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Semantics', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<Semantics />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders AutoClose', () => {
    const testRenderer = renderer.create(renderWithDarkTheme(<AutoClose />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const testRenderer = renderer.create(
      renderWithDarkTheme(<Customization />)
    );
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});

describe('Snackbar in RTL', () => {
  it('renders Default', () => {
    const testRenderer = renderer.create(renderWithRtl(<Default />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Positions', () => {
    const testRenderer = renderer.create(renderWithRtl(<Positions />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Options', () => {
    const testRenderer = renderer.create(renderWithRtl(<Options />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Semantics', () => {
    const testRenderer = renderer.create(renderWithRtl(<Semantics />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders AutoClose', () => {
    const testRenderer = renderer.create(renderWithRtl(<AutoClose />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('renders Customization', () => {
    const testRenderer = renderer.create(renderWithRtl(<Customization />));
    const testInstance = testRenderer.root;
    act(() => {
      const button = testInstance.findAllByType('button')[0];
      button && button?.props?.onClick();
    });
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
