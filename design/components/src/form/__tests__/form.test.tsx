import * as React from 'react';
import { create } from 'react-test-renderer';
import { Form, FormItem } from '../../';

const TestFormItems = () => (
  <React.Fragment>
    <FormItem>
      <label>
        Name
        <input type="text" placeholder="e.g. John Appleseed" />
      </label>
    </FormItem>
    <FormItem>
      <label>
        <input type="checkbox" name="terms" value="terms" /> I agree to the
        terms and conditions.
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
      <Form legend="Sign up">
        <TestFormItems />
      </Form>
    );

    expect(form).toMatchSnapshot();
  });

  test('renders with HTML form attributes', () => {
    const form = create(
      <Form legend="Sign up" action="#" method="post" autocomplete="on">
        <TestFormItems />
      </Form>
    );

    expect(form).toMatchSnapshot();
  });

  test('renders with custom maxWidth', () => {
    const form = create(
      <Form legend="Sign up" maxWidth="30rem">
        <TestFormItems />
      </Form>
    );

    expect(form).toMatchSnapshot();
  });
});
