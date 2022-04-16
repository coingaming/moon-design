import {rem, themed} from "@heathmont/moon-utils";
import styled from "styled-components";
import {AvatarProps} from "./AvatarTypes";
import {calcBorderRadius} from "./borderRadiusCalc";

export const Wrapper = styled.div<AvatarProps>(
  ({ size, imageUrl, color, backgroundColor, theme }) => [
    {
      color: themed('color', color)(theme),
      backgroundColor: themed('color', backgroundColor)(theme),
      borderRadius: calcBorderRadius(
        theme.newTokens.borderRadius.interactive,
        size === '2xlarge' ? theme.newTokens.borderRadius.large :
          size === 'xsmall' ? theme.newTokens.borderRadius.xsmall :
            theme.newTokens.borderRadius.medium
      ),
      overflow: 'hidden',
      textTransform: 'uppercase',
      fontWeight: theme.fontWeight.semibold,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
    },
    size === 'xsmall' && {
      height: rem(24),
      width: rem(24),
      fontSize: rem(10),
      lineHeight: rem(16),
    },
    size === 'small' && {
      height: rem(32),
      width: rem(32),
      fontSize: rem(12),
      lineHeight: rem(16),
    },
    size === 'medium' && {
      height: rem(40),
      width: rem(40),
      fontSize: rem(14),
      lineHeight: rem(24),
    },
    size === 'large' && {
      height: rem(48),
      width: rem(48),
      fontSize: rem(16),
      lineHeight: rem(24),
    },
    size === 'xlarge' && {
      height: rem(56),
      width: rem(56),
      fontSize: rem(16),
      lineHeight: rem(24),
    },
    size === '2xlarge' && {
      height: rem(64),
      width: rem(64),
      fontSize: rem(20),
      lineHeight: rem(32),
    },
  ]
);
