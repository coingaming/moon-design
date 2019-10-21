import * as React from 'react';
import { create } from 'react-test-renderer';

import { Tabs, TabItem } from '../tabs';

describe('Nav', () => {
  test('renders correctly', () => {
    const tabLink = create(
      <Tabs id="test-tabs">
        {[1, 2, 3, 4].map(i => (
          <TabItem key={i}>
            Item
            {i}
          </TabItem>
        ))}
      </Tabs>
    );

    expect(tabLink).toMatchSnapshot();
  });
});
