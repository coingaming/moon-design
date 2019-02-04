import * as React from 'react';
import { create } from 'react-test-renderer';
import { BannerToggle } from '../';

describe('BannerToggle', () => {
  test('renders properly', () => {
    const closeButton = create(<BannerToggle />);

    expect(closeButton).toMatchSnapshot();
  });
});
