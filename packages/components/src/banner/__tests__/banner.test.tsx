/* eslint-disable no-console */
import * as React from 'react';
import { create } from 'react-test-renderer';

import { Banner } from '../banner';
import { BannerToggle } from '../toggle';
import { Button } from '../../button/button';
import { Heading } from '../../heading/heading';

describe('Banner', () => {
  test('renders vertically by default', () => {
    const banner = create(
      <Banner>
        <Heading size="bravo" as="h2">
          Need help?
        </Heading>
        <p>
          If you require any assistance our 24/7 live chat support is here to
          help
        </p>
        <Button fullWidth modifier="secondary">
          Contact Us
        </Button>
      </Banner>
    );

    expect(banner).toMatchSnapshot();
  });

  test('renders horizontally', () => {
    const banner = create(
      <Banner horizontal>
        <p>Don't have any bitcoins?</p>
        <Button fullWidth modifier="secondary">
          Buy bitcoins
        </Button>
      </Banner>
    );

    expect(banner).toMatchSnapshot();
  });

  test('renders correctly with maxWidth prop', () => {
    const banner = create(
      <Banner maxWidth="600px">
        <Heading size="bravo" as="h2">
          Need help?
        </Heading>
        <p>
          If you require any assistance our 24/7 live chat support is here to
          help
        </p>
        <Button fullWidth modifier="secondary">
          Contact Us
        </Button>
      </Banner>
    );

    expect(banner).toMatchSnapshot();
  });

  describe('Closable', () => {
    test('renders with default vertical layout', () => {
      const banner = create(
        <Banner horizontal>
          <p>Don't have any bitcoins?</p>
          <Button fullWidth modifier="secondary">
            Buy bitcoins
          </Button>
          <BannerToggle
            onClick={() => {
              console.log('Closed');
            }}
          />
        </Banner>
      );

      expect(banner).toMatchSnapshot();
    });

    test('renders with horizontal layout', () => {
      const banner = create(
        <Banner>
          <Heading size="bravo" as="h2">
            Need help?
          </Heading>
          <p>
            If you require any assistance our 24/7 live chat support is here to
            help
          </p>
          <Button fullWidth modifier="secondary">
            Contact Us
          </Button>
          <BannerToggle
            onClick={() => {
              console.log('Closed');
            }}
          />
        </Banner>
      );

      expect(banner).toMatchSnapshot();
    });
  });
});
