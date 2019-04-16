import * as React from 'react';
import { Heading, Banner } from '@heathmont/sportsbet-components';
import { IconLargeMessage } from '@heathmont/sportsbet-icons';
import { colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

export const NeedAssistanceBanner = () => (
  <Banner>
    <Heading size="charlie" element="h3">
      <IconLargeMessage
        circleColor={colors.brand}
        style={{ fontSize: '3rem', marginRight: spacing('default') }}
      />
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
