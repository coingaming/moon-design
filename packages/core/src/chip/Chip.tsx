import React, { useState } from 'react';
import { SharedTheme, Theme } from '@heathmont/moon-themes';
import { rem } from '@heathmont/moon-utils';
import { rgba } from 'polished';
import styled from 'styled-components';

const determinePadding = (
  newTokens: SharedTheme['newTokens'],
  size?: Size,
  iconLeft?: JSX.Element | boolean,
  iconRight?: JSX.Element | boolean,
  iconOnly?: JSX.Element | boolean
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

    if (iconOnly) {
      paddingTop = newTokens.space.xsmall;
      paddingBottom = newTokens.space.xsmall;
    }
  } else {
    if (iconOnly) {
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
  iconOnly?: JSX.Element | boolean;
  iconLeft?: JSX.Element | boolean;
  iconRight?: JSX.Element | boolean;
  size?: Size;
  isStroke?: boolean;
};

type StyledChipProps = {
  isActive?: boolean;
  isStroke?: boolean;
  size?: Size;
  iconLeft?: JSX.Element | boolean;
  iconRight?: JSX.Element | boolean;
  iconOnly?: JSX.Element | boolean;
};

const StyledChip = styled.button<StyledChipProps>(
  ({ theme, isStroke, size, iconLeft, iconRight, iconOnly }) => [
    {
      zIndex: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: iconOnly ? 'center' : 'space-between',
      alignItems: 'center',
      borderRadius: theme.newTokens.borderRadius.medium,
      gap:
        size === 'medium'
          ? theme.newTokens.space.twoxsmall
          : theme.newTokens.space.threexsmall,
      ...determinePadding(theme.newTokens, size, iconLeft, iconRight, iconOnly),
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
  iconOnly,
  ...rest
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <StyledChip
      isActive={isActive}
      iconLeft={iconLeft}
      iconRight={iconRight}
      size={size}
      iconOnly={iconOnly}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...rest}
    >
      {iconLeft && <IconLeftWrapper>{iconLeft}</IconLeftWrapper>}
      {children}
      {iconOnly}
      {iconRight && <IconRightWrapper>{iconRight}</IconRightWrapper>}
    </StyledChip>
  );
};

export default Chip;
