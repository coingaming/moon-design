/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import { CSSObject } from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

const badgeStyle: CSSObject = {
  padding: `${spacing('xsmall')} ${spacing()}`,
  textAlign: 'center',
  textTransform: 'uppercase',
  borderRadius: rem(100),
  fontSize: rem(12),
  letterSpacing: rem(1),
};

type BadgeProps = { color?: string; backgroundColor?: string };

const Badge: React.FC<BadgeProps> = ({
  color = colors.neutral[10],
  backgroundColor = colors.brand,
  children,
  ...restProps
}) => {
  return (
    <span css={{ color, backgroundColor, ...badgeStyle }} {...restProps}>
      {children}
    </span>
  );
};

export { Badge };
