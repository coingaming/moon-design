import React from 'react';
import { sportsbetDark, ThemeProvider } from '@heathmont/moon-themes';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import FormCombo from '../../formCombo/FormCombo';
import FormComboButton from '../../formComboButton/FormComboButton';
import FormComboInput from '../../formComboInput/FormComboInput';
import FormError from '../../formError/FormError';
import FormItem from '../../formItem/FormItem';
import TextInput from '../../textInput/TextInput';
import Form from '../Form';

const renderWithTheme = (component: JSX.Element) => (
  <ThemeProvider theme={sportsbetDark}>{component}</ThemeProvider>
);

const TestFormItems = () => (
  <React.Fragment>
    <FormItem>
      <label htmlFor="testInput1">
        Name
        <input id="testInput1" type="text" placeholder="e.g. John Appleseed" />
      </label>
    </FormItem>
    <FormItem>
      <label htmlFor="testInput1">
        Password
        <input id="testInput1" type="password" />
      </label>
      <FormError>Please enter a valid password.</FormError>
    </FormItem>
    <FormItem>
      <label htmlFor="testInput2">
        <input id="testInput2" type="checkbox" name="terms" value="terms" />I
        agree to the terms and conditions.
      </label>
    </FormItem>
    <FormItem>
      <button type="submit" value="submit">
        Sign up
      </button>
    </FormItem>
  </React.Fragment>
);

describe('Form', () => {
  test('renders correctly', () => {
    const form = create(
      renderWithTheme(
        <Form legend="Sign up">
          <TestFormItems />
        </Form>
      )
    );

    expect(form).toMatchSnapshot();
  });

  test('renders with HTML form attributes', () => {
    const form = create(
      renderWithTheme(
        <Form legend="Sign up" action="#" method="post" autocomplete="on">
          <TestFormItems />
        </Form>
      )
    );

    expect(form).toMatchSnapshot();
  });

  test('renders with custom maxWidth', () => {
    const form = create(
      renderWithTheme(
        <Form legend="Sign up" maxWidth="30rem">
          <TestFormItems />
        </Form>
      )
    );

    expect(form).toMatchSnapshot();
  });

  test('renders with custom fullWidth', () => {
    const form = create(
      renderWithTheme(
        <Form legend="Sign up" fullWidth>
          <TestFormItems />
        </Form>
      )
    );

    expect(form).toMatchSnapshot();
  });

  test('renders a form combo', () => {
    const form = create(
      renderWithTheme(
        <Form legend="2FA" maxWidth="25rem">
          <FormItem>
            <FormCombo>
              <FormComboInput>
                {/* We apply styles to specific childen */}
                <TextInput
                  label="Enable Two Factor Authentication"
                  placeholder="Enter code"
                />
              </FormComboInput>
              <FormComboButton>
                {/* We don't apply any styles to specific childen */}
                <button type="submit">Submit</button>
              </FormComboButton>
            </FormCombo>
          </FormItem>
        </Form>
      )
    );

    expect(form).toMatchSnapshot();
  });

  test('renders a form combo without a label', () => {
    const form = create(
      renderWithTheme(
        <Form legend="2FA" maxWidth="25rem">
          <FormItem>
            <FormCombo>
              <FormComboInput>
                {/* We apply styles to specific childen */}
                <TextInput placeholder="Enter code" />
              </FormComboInput>
              <FormComboButton>
                {/* We don't apply any styles to specific childen */}
                <button type="submit">Submit</button>
              </FormComboButton>
            </FormCombo>
          </FormItem>
        </Form>
      )
    );

    expect(form).toMatchSnapshot();
  });
});
