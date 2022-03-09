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
    borderRadius: theme.newTokens.borderRadius.medium,
    padding: determinePadding(theme.newTokens, size),
    transition: theme.newTokens.transition.default,
    border: theme.newTokens.border.interactive,
    borderColor: theme.colorNew.goten,
    '&:hover': {
      background: rgba(theme.colorNew.piccolo, 0.2),
      color: theme.colorNew.piccolo,
      borderColor: theme.colorNew.piccolo,
    },
    fontSize: rem(14),
    lineHeight: rem(20),
  },
  ({ isActive, theme }) => ({
    background: isActive
      ? rgba(theme.colorNew.piccolo, 0.2)
      : theme.colorNew.gohan,
    color: isActive ? theme.colorNew.piccolo : theme.colorNew.trunks,
    cursor: isActive ? 'auto' : 'pointer',
    borderColor: isActive ? theme.colorNew.piccolo : theme.colorNew.gohan,
  }),
]);

const IconLeftWrapper = styled.span<
  ChipProps & { isOnlyIcons?: boolean; isOnlyLeftIcon?: boolean }
>(({ isOnlyIcons, isOnlyLeftIcon, theme: { newTokens } }) => [
  {
    marginInlineEnd: newTokens.space.threexsmall,
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
>(({ isOnlyIcons, isOnlyRightIcon, theme: { newTokens } }) => [
  {
    marginInlineStart: newTokens.space.threexsmall,
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
