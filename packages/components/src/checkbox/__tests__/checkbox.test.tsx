import * as React from 'react';
import { create } from 'react-test-renderer';

import { Checkbox } from '../checkbox';

const testProps = {
  label: 'I agree to the Terms & Conditions',
};

describe('Checkbox', () => {
  test('renders by default', () => {
    const checkbox = create(<Checkbox id="Checkbox-Test1" {...testProps} />);

    expect(checkbox).toMatchSnapshot();
  });

  test('renders as disabled', () => {
    const checkbox = create(
      <Checkbox id="Checkbox-Test2" disabled {...testProps} />
    );

    expect(checkbox).toMatchSnapshot();
  });

  test('renders with hidden aria-label', () => {
    const checkbox = create(
      <Checkbox id="Checkbox-Test3" ariaLabel="This label is hidden" />
    );

    expect(checkbox).toMatchSnapshot();
  });

  test('renders label with HTML', () => {
    const checkbox = create(
      <Checkbox
        id="Checkbox-Test4"
        label={
          <span>
            This is a label with a <a href="#test">link</a>.
          </span>
        }
      />
    );

    expect(checkbox).toMatchSnapshot();
  });
});
