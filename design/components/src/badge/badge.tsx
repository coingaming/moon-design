/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import { CSSObject } from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { badgeModifiers, BadgeModifiers } from './modifiers';
jsx;

const badgeStyle: CSSObject = {
  padding: `${rem(2)} ${rem(7)}`,
  textAlign: 'center',
  textTransform: 'uppercase',
  borderRadius: border.radius.largest,
  fontSize: rem(8),
  lineHeight: rem(10),
  letterSpacing: rem(0.5),
  fontWeight: 700,
};

type BadgeProps = {
  color?: string;
  backgroundColor?: string;
  modifier?: BadgeModifiers;
};

const Badge: React.FC<BadgeProps> = ({
  color = colors.neutral[10],
  backgroundColor = colors.brand,
  modifier,
  children,
  ...restProps
}) => {
  return (
    <span
      css={[
        modifier && badgeModifiers[modifier],
        { color, backgroundColor, ...badgeStyle },
      ]}
      {...restProps}
    >
      {children}
    </span>
  );
};

export { Badge };
