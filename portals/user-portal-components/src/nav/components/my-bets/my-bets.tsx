/** @jsx jsx */
import { FC } from 'react';
import rem from 'polished/lib/helpers/rem';
import styled, { CSSObject } from '@emotion/styled';
import { jsx } from '@emotion/core';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import { colors, border, breakpoints } from '@heathmont/sportsbet-tokens';
import { CustomLinkProps, CustomLink } from '../custom-link/CustomLink';

jsx;

export const MyBets: FC<CustomLinkProps> = props => {
  const linkCss: CSSObject = {
    display: 'none',
    [mq(breakpoints.small)]: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'nowrap',
      color: colors.neutral[20],
      '&:hover': {
        color: colors.neutral[10],
      },
    },
  };

  return <CustomLink css={linkCss} {...props} />;
};

export const MyBetsDigit = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colors.neutral[30],
  backgroundColor: colors.neutral[20],
  textAlign: 'center',
  marginTop: 0,
  minWidth: '0.75rem',
  marginRight: rem(2),
  fontSize: rem(12),
  height: spacing(),
  borderRadius: rem(2),
});

export const MyBetsCaption = styled.p({
  marginTop: 0,
  marginLeft: spacing('small'),
  borderRight: `${border.width}px solid ${colors.neutral[50]}`,
  paddingRight: spacing(),
  marginRight: spacing(),
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});
