/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx } from '@emotion/core';

import { Button, Heading } from '@heathmont/sportsbet-components';
import { colors } from '@heathmont/sportsbet-tokens';

type Props = {
  onClose: () => void;
};

export const DepositMessage: React.FC<Props> = ({ onClose }) => (
  <React.Fragment>
    <Heading size="foxtrot" element="h2">
      Success! Your email is now verified.
    </Heading>
    <p
      css={{
        color: colors.neutral[20],
      }}
    >
      The best betting experience is just around the corner.
    </p>
    <Button modifier="primary" onClick={onClose}>
      Deposit now
    </Button>
  </React.Fragment>
);
