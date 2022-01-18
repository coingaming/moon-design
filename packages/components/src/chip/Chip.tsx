import React from 'react';
import { rem } from '@heathmont/moon-utils';
import { rgba } from 'polished';
import styled from 'styled-components';

type ChipProps = {
  isActive?: boolean;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  size?: 'small' | 'medium';
};

const StyledChip = styled.button<ChipProps>(({ isActive, size, theme }) => [
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
      color: theme.color.piccolo[100],
    },
  },
  ({ size }) => ({
    fontSize: size === 'small' ? rem(12) : rem(14),
    lineHeight: size === 'small' ? `${rem(16)}` : rem(20),
  }),
  ({ isActive, theme }) => ({
    background: isActive
      ? rgba(theme.color.piccolo[100], 0.2)
      : theme.color.gohan[100],
    color: isActive ? theme.color.piccolo[100] : theme.color.trunks[100],
    cursor: isActive ? 'auto' : 'pointer',
  }),
]);

const IconLeftWrapper = styled.span<
  ChipProps & { isOnlyIcons?: boolean; isOnlyLeftIcon?: boolean }
>(({ isOnlyIcons, isOnlyLeftIcon }) => [
  {
    marginRight: rem(4),
  },
  isOnlyIcons && {
    marginRight: rem(2),
  },
  isOnlyLeftIcon && {
    marginRight: 0,
  },
]);

const IconRightWrapper = styled.span<
  ChipProps & { isOnlyIcons?: boolean; isOnlyRightIcon?: boolean }
>(({ isOnlyIcons, isOnlyRightIcon }) => [
  {
    marginLeft: rem(4),
  },
  isOnlyIcons && {
    marginLeft: rem(2),
  },
  isOnlyRightIcon && {
    marginLeft: 0,
  },
]);

const Chip: React.FC<ChipProps> = ({
  children,
  isActive,
  size,
  iconLeft,
  iconRight,
  ...rest
}) => (
  <StyledChip
    isActive={isActive}
    iconLeft={iconLeft}
    iconRight={iconRight}
    size={size}
    {...rest}
  >
    {iconLeft && (
      <IconLeftWrapper
        size={size}
        isOnlyIcons={!children}
        isOnlyLeftIcon={!children && !iconRight}
      >
        {iconLeft}
      </IconLeftWrapper>
    )}
    {children}
    {iconRight && (
      <IconRightWrapper
        size={size}
        isOnlyIcons={!children}
        isOnlyRightIcon={!children && !iconLeft}
      >
        {iconRight}
      </IconRightWrapper>
    )}
  </StyledChip>
);

export default Chip;
