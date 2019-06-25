/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import { IconClose } from '@heathmont/sportsbet-icons';
import { Toggle } from '..';

const BannerToggle: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => {
  return (
    <Toggle
      css={{
        color: colors.neutral[20],
        [mq(breakpoints.small)]: {
          top: spacing('medium'),
          right: spacing('medium'),
        },
      }}
      {...props}
    >
      <IconClose />
    </Toggle>
  );
};

export { BannerToggle };
