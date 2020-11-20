import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import { IconRefresh, IconDownload, IconExpand } from '@heathmont/moon-assets';
import React from 'react';

const Button = styled.button<{ hasUpdates?: boolean }>(
  ({ hasUpdates, theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  width: ${rem(24)};
  height: ${rem(24)};
  font-size: ${rem(16)};
  color: ${theme.color.trunks[100]};
  cursor: pointer;
  position: relative;
  will-change: color;
  transition: color ${theme.transitionDuration.default}s;
  &:hover, &:focus {
    color: ${theme.color.piccolo[100]};
  }
  ${
    hasUpdates
      ? `
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: ${rem(4)};
        height: ${rem(4)};
        border-radius: 50%;
        background: ${theme.color.piccolo[100]};
      }
    `
      : ''
  }
`
);

const Container = styled.div<{ isActive: boolean }>(
  ({ theme, isActive }) => `
  display: flex;
  flex-direction: column;
  padding: ${rem(theme.space.default)};
  color: ${isActive ? theme.color.goten[100] : theme.color.bulma[100]};
  background: ${isActive ? theme.color.piccolo[100] : theme.color.gohan[100]};
  border-radius: ${rem(theme.space.default)};
  width: 100%;
  ${
    isActive
      ? `
      ${Button} {
        color: ${theme.color.goten[100]};
        &:after {
          background: ${theme.color.goten[100]};
        }
      }
    `
      : ''
  }
`
);

const Header = styled.div(
  ({ theme }) => `
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  grid-column-gap: ${rem(theme.space.default)};
`
);

type Props = {
  hasUpdates: boolean;
  onUpdate?: () => void;
  onShare?: () => void;
  onExpand?: () => void;
  isActive?: boolean;
};

export const Panel: React.FC<Props> = ({
  hasUpdates,
  onUpdate,
  onShare,
  onExpand,
  children,
  isActive = false,
}) => {
  return (
    <Container isActive={isActive}>
      <Header>
        {onUpdate && (
          <Button hasUpdates={hasUpdates} onClick={() => onUpdate()}>
            <IconRefresh />
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
};
