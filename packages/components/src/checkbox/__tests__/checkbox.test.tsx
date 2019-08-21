import * as React from 'react';
import { create } from 'react-test-renderer';

import { Checkbox } from '..';

const testProps = {
  label: 'I agree to the Terms & Conditions',
};

describe('Checkbox', () => {
  test('renders by default', () => {
    const checkbox = create(<Checkbox {...testProps} />);

    expect(checkbox).toMatchSnapshot();
  });

  test('renders as disabled', () => {
    const checkbox = create(<Checkbox disabled {...testProps} />);

    expect(checkbox).toMatchSnapshot();
  });

  test('renders with hidden label', () => {
    const checkbox = create(<Checkbox hiddenLabel {...testProps} />);

    expect(checkbox).toMatchSnapshot();
  });
});
