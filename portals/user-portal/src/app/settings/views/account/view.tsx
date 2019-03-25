/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx } from '@emotion/core';
import { container, spacing } from '@heathmont/sportsbet-utils';

import { Heading } from '@heathmont/sportsbet-components';
import styled from '@emotion/styled';
import { colors, border } from '@heathmont/sportsbet-tokens';
import rem from 'polished/lib/helpers/rem';
import { AccountHeader } from './dumb-components/header';

export const AccountView = () => (
  <div css={container('large')}>
    <AccountHeader />
    <p>Account View</p>
  </div>
);
