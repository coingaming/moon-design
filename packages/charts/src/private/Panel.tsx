import React from 'react';
import { IconRefresh, IconDownload, IconExpand } from '@heathmont/moon-assets';
import { Loader } from '@heathmont/moon-components';
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
    color: theme.color.trunks[100],
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      transitionDuration: `${theme.transitionDuration.default}s`,
      transitionTimingFunction: 'ease',
      backgroundColor: theme.color.piccolo[100],
      borderRadius: rem(theme.radius.default),
      opacity: 0,
      transform: 'scale(0)',
      transitionProperty: 'transform, opacity',
    },
    '&:hover, &:focus': {
      color: theme.color.piccolo[100],
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
        background: theme.color.piccolo[100],
      },
    }),
  })
);

const Container = styled.div<{ isActive: boolean }>(({ theme, isActive }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: rem(theme.space.default),
  color: isActive ? theme.colorNew.goten : theme.color.bulma[100],
  background: isActive ? theme.color.piccolo[100] : theme.color.gohan[100],
  borderRadius: rem(theme.space.default),
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
  gridColumnGap: rem(theme.space.default),
  minHeight: rem(24),
}));

const IconRefreshStyled = styled(IconRefresh)({
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
          {isUpdating ? <Loader color="piccolo.100" /> : <IconRefreshStyled />}
        </Button>
      )}
      <div />
      {onShare && (
        <Button onClick={() => onShare()}>
          <IconDownload />
        </Button>
      )}
      {onExpand && (
        <Button onClick={() => onExpand()}>
          <IconExpand />
        </Button>
      )}
    </Header>
    {children}
  </Container>
);
