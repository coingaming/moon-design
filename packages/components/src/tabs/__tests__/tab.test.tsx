import * as React from 'react';
import { create } from 'react-test-renderer';

import { Tabs, Tab } from '../tabs';

describe('Nav', () => {
  test('renders correctly', () => {
    const tabLink = create(
      <Tabs id="test-tabs">
        {[1, 2, 3, 4].map(i => (
          <Tab key={i}>
            Item
            {i}
          </Tab>
        ))}
      </Tabs>
    );

    expect(tabLink).toMatchSnapshot();
  });
});
