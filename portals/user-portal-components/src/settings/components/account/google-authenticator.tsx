import * as React from 'react';
import styled from '@emotion/styled';
import { border, colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';

const Wrapper = styled.div(() => ({
  border: `${border.width}px ${border.style} ${colors.neutral[50]}`,
  padding: spacing('default'),
  backgroundColor: colors.neutral[70],
  display: 'flex',
  flexFlow: 'row wrap',
  width: rem(320),
}));

const QR = styled.div(() => ({
  borderRadius: border.radius.small,
  backgroundColor: colors.neutral[10],
  padding: spacing(),
  'img, svg': {
    maxWidth: '100%',
  },
}));

const Caption = styled.div(() => ({
  backgroundColor: colors.neutral[50],
  width: '44%',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  padding: spacing(),
  color: colors.neutral[20],
  fontSize: '15px',
  lineHeight: '19px',
  position: 'relative',
}));

const ToolTip = ({ link, children }: any) => {
  const ToolTip = styled.a(() => ({
    borderRadius: '50%',
    backgroundColor: colors.neutral[20],
    color: colors.neutral[70],
    width: spacing(),
    height: spacing(),
    position: 'absolute',
    top: rem(8),
    right: rem(8),
    fontWeight: 700,
    fontSize: '13px',
    lineHeight: '1rem',
    textDecoration: 'none',
  }));
  return (
    <ToolTip target="_blank" href={link}>
      {children}
    </ToolTip>
  );
};

export const GoogleAuthenticator = ({ caption, link, children }: any) => {
  return (
    <Wrapper>
      <QR>{children}</QR>
      <Caption>
        <ToolTip link={link}>?</ToolTip>
        {caption}
      </Caption>
    </Wrapper>
  );
};
