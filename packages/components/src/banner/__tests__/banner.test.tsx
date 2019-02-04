import * as React from 'react';
import { create } from 'react-test-renderer';
import { Banner, BannerToggle } from '../';
import { Button } from '../../button';
import { Heading } from '../../heading/heading';

describe('Banner', () => {
  test('renders correctly', () => {
    const banner = create(
      <Banner>
        Icon
        <Heading size="foxtrot" element="h2">
          Need help?
        </Heading>
        <p>
          If you require any assistance our 24/7 live chat support is here to
          help
        </p>
        <Button fullWidth={true} modifier="secondary">
          Buy bitcoins
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

  describe('Closable', () => {
    test('Closable horizontal banner renders properly', () => {
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

    test('Closable vertical banner renders properly', () => {
      const banner = create(
        <Banner>
          Icon
          <Heading size="foxtrot" element="h2">
            Need help?
          </Heading>
          <p>
            If you require any assistance our 24/7 live chat support is here to
            help
          </p>
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

    test('Closable element can be placed anywhere within vertical Banner', () => {
      const banner = create(
        <Banner>
          Icon
          <Heading size="foxtrot" element="h2">
            Need help?
          </Heading>
          <p>
            If you require any assistance our 24/7 live chat support is here to
            help
          </p>
          <BannerToggle
            onClick={() => {
              console.log('Closed');
            }}
          />
          <Button fullWidth modifier="secondary">
            Buy bitcoins
          </Button>
        </Banner>
      );

      expect(banner).toMatchSnapshot();
    });
  });

  test('Closable element can be placed anywhere within horizontal Banner', () => {
    const banner = create(
      <Banner horizontal>
        <BannerToggle
          onClick={() => {
            console.log('Closed');
          }}
        />
        <p>Don't have any bitcoins?</p>
        <Button fullWidth modifier="secondary">
          Buy bitcoins
        </Button>
      </Banner>
    );

    expect(banner).toMatchSnapshot();
  });
});
