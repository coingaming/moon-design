import * as React from 'react';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { breakpoints, colors } from '@heathmont/sportsbet-tokens';
import { IconChevronDown } from '@heathmont/sportsbet-icons';
import { myBetsContainerColors } from './shared/utils';
import { USER_PORTAL_CONTAINER_PADDING, userPortalContainerFlush } from '../..';

type Props = {
  open?: boolean;
  onToggle?: (e: React.MouseEvent) => void;
  // editor upset TSC didn't care :man_shrugging:
  // header: ReactChildren | JSXElement | Element | string;
  header: any;
  // children: ReactChildren | JSXElement | Element | string;
  children: any;
  // footer: ReactChildren | JSXElement | Element | string;
  footer: any;
};

type State = {
  open: boolean;
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

const Header = styled.div<{ open: boolean; onClick?: any }>(({ open }) => [
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

export class MyBetAccordion extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { open: props.open ? props.open : false };
  }

  toggle = (event: React.MouseEvent<HTMLDivElement>): void => {
    console.log(event, 'clicked');

    this.setState(() => ({ open: !this.state.open }));
  };

  render() {
    const { children, header, footer } = this.props;
    const { open } = this.state;

    return (
      <Wrapper>
        <Header open={open} onClick={this.toggle}>
          {header}
          <IconChevronDown
            backgroundColor={myBetsContainerColors.footerSeparator}
            color={colors.neutral[20]}
          />
        </Header>
        <Container open={open}>{children}</Container>
        <Footer open={open}>{footer}</Footer>
      </Wrapper>
    );
  }
}
