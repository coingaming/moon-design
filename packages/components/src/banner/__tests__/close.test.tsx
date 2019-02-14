import * as React from 'react';
import { create } from 'react-test-renderer';
import { BannerToggle } from '../';

describe('BannerToggle', () => {
  test('renders correctly', () => {
    const closeButton = create(<BannerToggle />);

    expect(closeButton).toMatchSnapshot();
  });

  test('accepts standard `button` props', () => {
    const closeButton = create(
      <BannerToggle
        onClick={() => {
          console.log('Closed');
        }}
      />
    );

    expect(closeButton).toMatchSnapshot();
  });
});
