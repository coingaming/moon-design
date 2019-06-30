import * as React from 'react';
import styled from '@emotion/styled';
import { border, breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';
import math from 'polished/lib/math/math';

// Settings
const tooltipSize = spacing();

// Components
const Box = styled.div({
  display: 'flex',
  width: '100%',
  padding: spacing(),
  marginTop: spacing('large'),
  backgroundColor: colors.neutral[70],

  [mq(breakpoints.medium)]: {
    maxWidth: rem(320),
    marginRight: spacing('large'),
  },
});

const QR = styled.div({
  borderRadius: border.radius.small,
  backgroundColor: colors.neutral[10],
  padding: spacing(),
  'img, svg': {
    maxWidth: rem(96),
  },
});

const Link = styled.a({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  textAlign: 'center',
  textDecoration: 'none',
  color: colors.neutral[20],
  fontSize: '15px',
  lineHeight: '19px',
  position: 'relative',
  padding: spacing(),
  paddingTop: math(`${spacing()} + ${tooltipSize}`),
});

const ToolTip = styled.div({
  borderRadius: '50%',
  backgroundColor: colors.neutral[20],
  color: colors.neutral[70],
  width: spacing(),
  height: spacing(),
  position: 'absolute',
  top: spacing('small'),
  right: spacing('small'),
  fontWeight: 700,
  fontSize: '13px',
  lineHeight: '1rem',
  '&::after': {
    content: `"?"`,
    position: 'relative',
  },
});

export const GoogleAuthenticator = ({ caption, link, children }: any) => {
  return (
    <Box>
      <QR>{children}</QR>
      <Link href={link} target="_blank">
        <ToolTip />
        {caption}
      </Link>
    </Box>
  );
};
