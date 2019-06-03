/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import { CSSObject } from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

const badgeStyle: CSSObject = {
  padding: `0.2rem ${spacing('small')}`,
  textAlign: 'center',
  textTransform: 'uppercase',
  borderRadius: border.radius.largest,
  fontSize: rem(10),
  lineHeight: rem(10),
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
