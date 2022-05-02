import React from 'react';
import { Loader } from '@heathmont/moon-core';
import { ArrowsUpdate,GenericDownload,ControlsDiagonalsOutsight } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Button = styled.button<{ hasUpdates?: boolean }>(
  ({ hasUpdates, theme }) => ({
    border: 'none',
    background: 'none',
    outline: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: rem(32),
    height: rem(32),
    padding: rem(8),
    fontSize: rem(16),
    color: theme.colorNew.trunks,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      transition: `${theme.newTokens.transition.default}`,
      backgroundColor: theme.colorNew.piccolo,
      borderRadius: theme.newTokens.borderRadius.medium,
      opacity: 0,
      transform: 'scale(0)',
      transitionProperty: 'transform, opacity',
    },
    '&:hover, &:focus': {
      color: theme.colorNew.piccolo,
      '&:before': {
        transform: 'scale(1)',
        opacity: 0.1,
      },
    },
    ...(hasUpdates && {
      '&:after': {
        content: '""',
        position: 'absolute',
        top: rem(4),
        right: rem(4),
        width: rem(4),
        height: rem(4),
        borderRadius: '50%',
        background: theme.colorNew.piccolo,
      },
    }),
  })
);

const Container = styled.div<{ isActive: boolean }>(({ theme, isActive }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.newTokens.space.small,
  color: isActive ? theme.colorNew.goten : theme.colorNew.bulma,
  background: isActive ? theme.colorNew.piccolo : theme.colorNew.gohan,
  borderRadius: theme.newTokens.space.small,
  width: '100%',
  ...(isActive && {
    [Button]: {
      color: theme.colorNew.goten,
      '&:after': {
        background: theme.colorNew.goten,
      },
    },
  }),
}));

const Header = styled.div(({ theme }) => ({
  display: 'grid',
  flexShrink: 0,
  gridTemplateColumns: 'auto 1fr auto auto',
  gridColumnGap: theme.newTokens.space.small,
  minHeight: rem(24),
}));

const IconRefreshStyled = styled(ArrowsUpdate)({
  transform: 'rotate(90deg)',
});

type Props = {
  hasUpdates: boolean;
  isUpdating: boolean;
  onUpdate?: () => void;
  onShare?: () => void;
  onExpand?: () => void;
  isActive?: boolean;
  height?: string | number;
  children?: React.ReactNode;
};

export const Panel: React.FC<Props> = ({
  onUpdate,
  onShare,
  onExpand,
  children,
  height,
  hasUpdates,
  isUpdating,
  isActive = false,
}) => (
  <Container isActive={isActive} style={{ height }}>
    <Header>
      {onUpdate && (
        <Button
          hasUpdates={hasUpdates && !isUpdating}
          onClick={() => onUpdate()}
        >
          {isUpdating ? (
            <Loader size="twoxsmall" color="piccolo.100" />
          ) : (
            <IconRefreshStyled />
          )}
        </Button>
      )}
      <div />
      {onShare && (
        <Button onClick={() => onShare()}>
          <GenericDownload fontSize={rem(22)}/>
        </Button>
      )}
      {onExpand && (
        <Button onClick={() => onExpand()}>
          <ControlsDiagonalsOutsight fontSize={rem(22)}/>
        </Button>
      )}
    </Header>
    {children}
  </Container>
);
