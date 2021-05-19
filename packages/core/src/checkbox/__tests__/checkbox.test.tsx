import React from 'react';
import { create } from 'react-test-renderer';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import 'jest-styled-components';

import Checkbox from '../Checkbox';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

const testProps = {
  label: 'I agree to the Terms & Conditions',
};

describe('Checkbox', () => {
  test('renders by default', () => {
    const checkbox = create(
      renderWithTheme(<Checkbox id="Checkbox-Test1" {...testProps} />),
    );

    expect(checkbox).toMatchSnapshot();
  });

  test('renders as disabled', () => {
    const checkbox = create(
      renderWithTheme(<Checkbox id="Checkbox-Test2" disabled {...testProps} />),
    );

    expect(checkbox).toMatchSnapshot();
  });

  test('renders as checked', () => {
    const checkbox = create(
      renderWithTheme(<Checkbox id="Checkbox-Test3" checked {...testProps} />),
    );

    expect(checkbox).toMatchSnapshot();
  });

  test('renders with hidden aria-label', () => {
    const checkbox = create(
      renderWithTheme(
        <Checkbox id="Checkbox-Test4" ariaLabel="This label is hidden" />,
      ),
    );

    expect(checkbox).toMatchSnapshot();
  });

  test('renders label with HTML', () => {
    const checkbox = create(
      renderWithTheme(
        <Checkbox
          id="Checkbox-Test5"
          caption={
            <span>
              This is a label with a <a href="#test">link</a>.
            </span>
          }
        />,
      ),
    );

    expect(checkbox).toMatchSnapshot();
  });
});
