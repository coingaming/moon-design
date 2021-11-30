import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Accordion from '../Accordion';
import { moonDesignLight, ThemeProvider } from '@heathmont/moon-themes';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={moonDesignLight}>{component}</ThemeProvider>
);

describe('Accordion', () => {
  const testRenderer = renderer.create(renderWithTheme(<Accordion />));
  const testInstance = testRenderer.root;

  it('renders', () => {
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('expands', () => {
    act(() => {
      const button = testInstance.findByType('button')
      button.props.onClick();
    });

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
