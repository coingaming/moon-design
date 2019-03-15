import * as React from 'react';
import {
  Heading,
  Banner,
  Button,
  BannerToggle,
} from '@heathmont/sportsbet-components';

export const NeedHelpBanner = () => (
  <Banner>
    <Heading size="bravo" element="h2">
      Need help?
    </Heading>
    <p>
      If you require any assistance our 24/7 live chat support is here to help
    </p>
    <Button
      fullWidth
      modifier="secondary"
      onClick={() => {
        console.log('Contact Us');
      }}
    >
      Contact Us
    </Button>
    <BannerToggle
      onClick={() => {
        console.log('Closed');
      }}
    />
  </Banner>
);
