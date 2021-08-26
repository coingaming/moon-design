import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import { rgba } from 'polished';

type ChipProps = {
  isActive?: boolean;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  size?: 'small' | 'medium';
};

const StyledChip = styled.div<ChipProps>(({ isActive, size, theme }) => [
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: `${rem(theme.radius.default)}`,
    padding: `${rem(8)}`,
    transition: `${theme.transitionDuration.default}s`,
    '&:hover': {
        background: rgba(theme.color.piccolo[100], 0.2),
        color: theme.color.piccolo[100]
    }
  },
  ({ size }) => ({
    fontSize: size === 'small' ? rem(12) : rem(14),
    lineHeight: size === 'small' ? `${rem(16)}` : rem(20),
  }),
  ({ isActive, theme }) => ({
    background: isActive ? rgba(theme.color.piccolo[100], 0.2) : theme.color.gohan[100],
    color: isActive ? theme.color.piccolo[100] : theme.color.trunks[100],
    cursor: isActive ? 'auto' : 'pointer'
  }),
]);

const IconLeftWrapper = styled.span<ChipProps>({
  marginLeft: rem(8),
});

const IconRightWrapper = styled.span<ChipProps>({
  marginLeft: rem(8),
});

const Chip: React.FC<ChipProps> = ({
  children,
  isActive,
  size,
  iconLeft,
  iconRight,
}) => (
  <StyledChip
    isActive={isActive}
    iconLeft={iconLeft}
    iconRight={iconRight}
    size={size}
  >
    {iconLeft && <IconLeftWrapper size={size}>{iconLeft}</IconLeftWrapper>}
    {children}
    {iconRight && <IconRightWrapper size={size}>{iconRight}</IconRightWrapper>}
  </StyledChip>
);

export default Chip;
