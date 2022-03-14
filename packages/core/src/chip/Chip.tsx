import React from 'react';
import { SharedTheme, Theme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import { rgba } from 'polished';
import styled from 'styled-components';

const determinePadding = (newTokens: SharedTheme['newTokens'], size?: Size) => {
  if (size === 'small') {
    return `${newTokens.space.threexsmall} ${newTokens.space.twoxsmall}`;
  }

  return `${newTokens.space.twoxsmall} ${newTokens.space.xsmall}`;
};

const determineDimensions = (size?: Size) => {
  if (size === 'small') {
    return {
      minWidth: rem(89),
      height: rem(32),
    };
  }

  return {
    minWidth: rem(125),
    height: rem(40),
  };
};

const determineBorder = (
  theme: Theme,
  isActive?: boolean,
  isStroke?: boolean,
  isHover?: boolean
) => {
  if ((isActive || isHover) && isStroke) {
    return {
      boxShadow: `0 0 0 ${theme.newTokens.border.width.interactive} ${theme.colorNew.piccolo} inset`,
    };
  }
  return {};
};

type Size = 'small' | 'medium';

type ChipProps = {
  isActive?: boolean;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  size?: Size;
  isStroke: boolean;
};

const StyledChip = styled.button<ChipProps>(({ size, isStroke, theme }) => [
  {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.newTokens.borderRadius.medium,
    padding: determinePadding(theme.newTokens, size),
    transition: theme.newTokens.transition.default,
    ...determineBorder(theme, false, isStroke),
    ...determineDimensions(size),
    '&:hover': {
      background: rgba(theme.colorNew.piccolo, 0.2),
      color: theme.colorNew.piccolo,
      ...determineBorder(theme, false, isStroke, true),
    },
    fontSize: rem(14),
    lineHeight: rem(20),
  },
  ({ isActive, theme, isStroke }) => ({
    background: isActive
      ? rgba(theme.colorNew.piccolo, 0.12)
      : theme.colorNew.gohan,
    color: isActive ? theme.colorNew.piccolo : theme.colorNew.trunks,
    cursor: isActive ? 'auto' : 'pointer',
    ...determineBorder(theme, isActive, isStroke),
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
