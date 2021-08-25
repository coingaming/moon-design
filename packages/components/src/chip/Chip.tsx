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
    borderRadius: `${rem(8)}`,
    padding: `${rem(8)}`,
    transition: `${theme.transitionDuration.default}s`,
    '&:hover': {
        background: rgba(theme.color.piccolo[100], 0.2),
        color: theme.color.piccolo[100]
    }
  },
  size === 'small' && {
    lineHeight: `${rem(16)}`,
    fontSize: `${rem(12)}`,
  },
  size === 'medium' && {
    lineHeight: `${rem(20)}`,
    fontSize: `${rem(14)}`,
  },
  isActive && {
    background: rgba(theme.color.piccolo[100], 0.2),
    color: theme.color.piccolo[100],
    cursor: ''
  },
  !isActive && {
    background: theme.color.gohan[100],
    color: theme.color.trunks[100],
    cursor: 'pointer'
  },
]);

const IconLeftWrapper = styled.span<ChipProps>({
  marginLeft: `${rem(8)}`,
});

const IconRightWrapper = styled.span<ChipProps>({
  marginLeft: `${rem(8)}`,
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
