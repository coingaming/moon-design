import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import { IconRefresh, IconDownload, IconExpand } from '@heathmont/moon-assets';
import React from 'react';

const Container = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  padding: ${rem(theme.space.default)};
  background: ${theme.color.gohan[100]};
  border-radius: ${rem(theme.space.default)};
`
);

const Header = styled.div(
  ({ theme }) => `
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  grid-column-gap: ${rem(theme.space.default)};
`
);

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

type Props = {
  hasUpdates: boolean;
  onUpdate?: () => void;
  onShare?: () => void;
  onExpand?: () => void;
};

export const Panel: React.FC<Props> = ({
  hasUpdates,
  onUpdate,
  onShare,
  onExpand,
  children,
}) => {
  return (
    <Container>
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
