import React from 'react';
import { SharedTheme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import { rgba } from 'polished';
import styled from 'styled-components';

const determinePadding = (newTokens: SharedTheme['newTokens'], size?: Size) => {
  if (size === 'small') {
    return `${newTokens.space.threexsmall} ${newTokens.space.twoxsmall}`;
  }

  return `${newTokens.space.twoxsmall} ${newTokens.space.xsmall}`;
};

type Size = 'small' | 'medium';

type ChipProps = {
  isActive?: boolean;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  size?: Size;
};

const StyledChip = styled.button<ChipProps>(({ size, theme }) => [
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: `${rem(theme.radius.default)}`,
    padding: determinePadding(theme.newTokens, size),
    transition: `${theme.transitionDuration.default}s`,
    '&:hover': {
      background: rgba(theme.color.piccolo[100], 0.2),
      color: theme.color.piccolo[100],
    },
    fontSize: rem(14),
  },
  ({ size }) => ({
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
    marginInlineEnd: rem(4),
  },
  isOnlyIcons && {
    marginInlineEnd: rem(2),
  },
  isOnlyLeftIcon && {
    marginInlineEnd: 0,
  },
]);

const IconRightWrapper = styled.span<
  ChipProps & { isOnlyIcons?: boolean; isOnlyRightIcon?: boolean }
>(({ isOnlyIcons, isOnlyRightIcon }) => [
  {
    marginInlineStart: rem(4),
  },
  isOnlyIcons && {
    marginInlineStart: rem(2),
  },
  isOnlyRightIcon && {
    marginInlineStart: 0,
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
