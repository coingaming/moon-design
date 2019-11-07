import * as React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import { Tabs } from '../tabs';

describe('Nav', () => {
  test('renders correctly', () => {
    const tabLink = create(<Tabs id="test-tabs" items={[0, 1, 2, 3, 4]} />);

    expect(tabLink).toMatchSnapshot();
  });
});
