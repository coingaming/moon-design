import React, { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { IconChevronDown } from '@heathmont/sportsbet-icons';

import { USER_PORTAL_CONTAINER_PADDING, userPortalContainerFlush } from '../..';

import { myBetsContainerColors } from './shared/utils';

type Props = {
  open?: boolean;
  onToggle?: (e: React.MouseEvent) => void;
  header: ReactNode;
  children: ReactNode;
  footer: ReactNode;
};

const Wrapper = styled.div<{ onClick?: any }>(() => [
  {
    ...userPortalContainerFlush,
    backgroundColor: myBetsContainerColors.backgroundColor,
    marginBottom: spacing(),
    paddingLeft: rem(USER_PORTAL_CONTAINER_PADDING),
    paddingRight: rem(USER_PORTAL_CONTAINER_PADDING),
    [mq(breakpoints.medium)]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
]);

const Header = styled.div<{
  open?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}>(({ open }) => [
  {
    paddingTop: rem(USER_PORTAL_CONTAINER_PADDING),
    paddingBottom: rem(USER_PORTAL_CONTAINER_PADDING),
    cursor: 'pointer',
    position: 'relative',
    '& > svg': {
      position: 'absolute',
      right: 0,
      top: rem(USER_PORTAL_CONTAINER_PADDING),
      transition: 'transform 0.3s ease',
      fontSize: rem(16),
    },
    [mq(breakpoints.medium)]: {
      paddingLeft: rem(USER_PORTAL_CONTAINER_PADDING),
      paddingRight: rem(USER_PORTAL_CONTAINER_PADDING),
      '& > svg': {
        right: rem(USER_PORTAL_CONTAINER_PADDING),
        top: rem(USER_PORTAL_CONTAINER_PADDING),
      },
    },
  },
  open && {
    '& > svg': {
      transform: 'rotate(180deg)',
    },
  },
]);

const Container = styled.div<{ open?: boolean; onClick?: any }>(({ open }) => [
  {
    maxHeight: 0,
    transition: 'max-height 0.3s ease-in-out, padding 0.3s ease',
    overflow: 'hidden',
    [mq(breakpoints.medium)]: {
      paddingLeft: rem(USER_PORTAL_CONTAINER_PADDING),
      paddingRight: rem(USER_PORTAL_CONTAINER_PADDING),
    },
  },
  open && {
    borderTop: `1px solid ${myBetsContainerColors.footerSeparatorMob}`,
    maxHeight: rem(450),
    paddingTop: rem(USER_PORTAL_CONTAINER_PADDING),
    paddingBottom: rem(USER_PORTAL_CONTAINER_PADDING),
    [mq(breakpoints.medium)]: {
      border: 'none',
    },
  },
]);

const Footer = styled.div<{ open?: boolean; onClick?: any }>(({ open }) => [
  {
    paddingBottom: rem(USER_PORTAL_CONTAINER_PADDING),
    paddingTop: rem(USER_PORTAL_CONTAINER_PADDING),

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: `1px solid ${myBetsContainerColors.footerSeparatorMob}`,
    [mq(breakpoints.medium)]: {
      borderColor: myBetsContainerColors.footerSeparator,
      paddingLeft: rem(USER_PORTAL_CONTAINER_PADDING),
      paddingRight: rem(USER_PORTAL_CONTAINER_PADDING),
    },
  },
  open && {
    [mq(breakpoints.medium)]: {
      borderColor: 'transparent',
    },
  },
]);

export const MyBetAccordion: React.FC<Props> = ({
  children,
  header,
  footer,
  open,
}: Props) => {
  const [opened, setOpen] = useState(!!open);

  return (
    <Wrapper>
      <Header
        tabIndex={0}
        open={opened}
        onClick={() => {
          setOpen(!opened);
        }}
        onKeyDown={() => {
          setOpen(!opened);
        }}
      >
        {header}
        <IconChevronDown
          backgroundColor={myBetsContainerColors.footerSeparator}
          color={colors.neutral[20]}
        />
      </Header>
      <Container open={opened}>{children}</Container>
      <Footer open={opened}>{footer}</Footer>
    </Wrapper>
  );
};
