/** @jsx jsx */
import { FC } from 'react';
import styled, { CSSObject } from '@emotion/styled';
import { jsx } from '@emotion/core';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { CustomLinkProps, CustomLink } from '../custom-link/CustomLink';

export const Userhub: FC<CustomLinkProps> = props => {
  const linkCss: CSSObject = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    color: colors.neutral[20],
    '&:hover': {
      color: colors.neutral[10],
    },
  };

  return <CustomLink css={linkCss} {...props} />;
};

export const UserhubInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignItems: 'flex-end',
  marginRight: spacing('small'),
  [mq(breakpoints.small)]: {
    marginRight: spacing(),
  },
});

export const UserhubInfoUsername = styled.p({
  marginTop: 0,
});

export const UserhubInfoBalance = styled.p({
  marginTop: 0,
  textAlign: 'center',
  color: colors.neutral[10],
});

export const UserhubIconProfile = styled.div({
  position: 'relative',
  fontSize: '1.25rem',
  marginRight: spacing(),
  [mq(breakpoints.small)]: {
    marginRight: 0,
  },
  '& > svg': {
    fontSize: '2.5rem',
  },
});
