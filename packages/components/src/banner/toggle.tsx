/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';
import { rem } from 'polished';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import { Toggle } from '../';
jsx;

const bannerToggle = css({
  lineHeight: rem(16),
  fontSize: rem(30),
  color: colors.neutral[20],
  [mq(breakpoints.small)]: {
    top: spacing('medium'),
    right: spacing('medium'),
  },
});

const BannerToggle: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => {
  return (
    <Toggle css={bannerToggle} {...props}>
      ×
    </Toggle>
  );
};

export { BannerToggle };
