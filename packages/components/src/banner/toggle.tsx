/** @jsx jsx */
import * as React from 'react';
import { jsx, css } from '@emotion/core';
import { rem } from 'polished';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import { IconClose, Toggle } from '../';
jsx;

const bannerToggle = css({
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
      <IconClose />
    </Toggle>
  );
};

export { BannerToggle };
