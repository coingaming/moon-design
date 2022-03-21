import React, { useState } from 'react';
import { SharedTheme, Theme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import { rgba } from 'polished';
import styled from 'styled-components';

const determinePadding = (
  newTokens: SharedTheme['newTokens'],
  size?: Size,
  hasStartIcon?: boolean,
  hasEndIcon?: boolean,
  hasIconOnly?: boolean
) => {
  let paddingTop = newTokens.space.threexsmall;
  let paddingBottom = newTokens.space.threexsmall;
  let paddingInlineStart = newTokens.space.twoxsmall;
  let paddingInlineEnd = newTokens.space.twoxsmall;

  if (size === 'medium') {
    paddingTop = newTokens.space.twoxsmall;
    paddingBottom = newTokens.space.twoxsmall;
    paddingInlineStart = newTokens.space.xsmall;
    paddingInlineEnd = newTokens.space.xsmall;

    if (hasIconOnly) {
      paddingTop = newTokens.space.xsmall;
      paddingBottom = newTokens.space.xsmall;
    }
  } else {
    if (hasIconOnly) {
      paddingTop = newTokens.space.twoxsmall;
      paddingBottom = newTokens.space.twoxsmall;
      paddingInlineStart = newTokens.space.twoxsmall;
      paddingInlineEnd = newTokens.space.twoxsmall;
    }
  }

  return {
    paddingTop,
    paddingBottom,
    paddingInlineStart,
    paddingInlineEnd,
  };
};

const determineDimensions = (size?: Size) => {
  if (size === 'small') {
    return {
      // minWidth: rem(89),
      height: rem(32),
    };
  }

  return {
    // minWidth: rem(125),
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
  isStroke?: boolean;
};

type StyledChipProps = {
  isActive?: boolean;
  isStroke?: boolean;
  size?: Size;
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  hasIconOnly?: boolean;
};

const StyledChip = styled.button<StyledChipProps>(
  ({ theme, isStroke, size, hasIconLeft, hasIconRight, hasIconOnly }) => [
    {
      zIndex: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: hasIconOnly ? 'center' : 'space-between',
      alignItems: 'center',
      borderRadius: theme.newTokens.borderRadius.medium,
      gap:
        size === 'medium'
          ? theme.newTokens.space.twoxsmall
          : theme.newTokens.space.threexsmall,
      ...determinePadding(
        theme.newTokens,
        size,
        hasIconLeft,
        hasIconRight,
        hasIconOnly
      ),
      transition: theme.newTokens.transition.default,
      ...determineBorder(theme, false, isStroke),
      ...determineDimensions(size),
      '&:hover': {
        background: rgba(theme.colorNew.piccolo, 0.12),
        color: theme.colorNew.piccolo,
        ...determineBorder(theme, false, isStroke, true),
      },
      fontSize: rem(14),
      lineHeight: rem(24),
      position: 'relative',
    },
    ({ isActive, theme, isStroke }) => ({
      background: isActive
        ? rgba(theme.colorNew.piccolo, 0.12)
        : theme.colorNew.gohan,
      color: isActive ? theme.colorNew.piccolo : theme.colorNew.popo,
      cursor: isActive ? 'auto' : 'pointer',
      ...determineBorder(theme, isActive, isStroke),
    }),
  ]
);

const IconLeftWrapper = styled.span({});

const IconRightWrapper = styled.span({});

const Chip: React.FC<ChipProps> = ({
  children,
  isActive,
  size = 'medium',
  iconLeft,
  iconRight,
  ...rest
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <StyledChip
      isActive={isActive}
      hasIconLeft={!!iconLeft}
      hasIconRight={!!iconRight}
      size={size}
      hasIconOnly={React.Children.toArray(children).length === 0}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...rest}
    >
      {iconLeft && <IconLeftWrapper>{iconLeft}</IconLeftWrapper>}
      {children}
      {iconRight && <IconRightWrapper>{iconRight}</IconRightWrapper>}
    </StyledChip>
  );
};

export default Chip;
