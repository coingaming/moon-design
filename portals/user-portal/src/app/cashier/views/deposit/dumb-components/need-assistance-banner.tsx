import * as React from 'react';
import { Heading, Banner, Button } from '@heathmont/sportsbet-components';

export const NeedAssistanceBanner = () => (
  <Banner>
    <Heading size="charlie" element="h3">
      Need assistance?
    </Heading>
    <p>
      If you require any assistance our 24/7 live chat support is here to help
    </p>
    {/* <Button
      fullWidth
      modifier="secondary"
      outline
      onClick={() => {
        console.log('Contact Us');
      }}
    >
      Contact Us
    </Button> */}
  </Banner>
);
