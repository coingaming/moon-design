import {rem} from "@heathmont/moon-utils";
import styled from "styled-components";
import {AvatarProps} from "./AvatarTypes";

export const Status = styled.div<AvatarProps>(
  ({ theme: { color }, size, isStatusActive, statusOrigin }) => [
    {
      position: 'absolute',
      borderStyle: 'solid',
      borderColor: color.beerus[100],
      borderRadius: '50%',
      backgroundColor: isStatusActive ? color.roshi[100] : color.gohan[100],
      display: isStatusActive ? 'block' : 'none'
    },
    statusOrigin &&
    statusOrigin.vertical === 'top' && {
      top: 0,
    },
    statusOrigin &&
    statusOrigin.vertical === 'bottom' && {
      bottom: 0,
    },
    statusOrigin &&
    statusOrigin.horizontal === 'left' && {
      left: 0,
    },
    statusOrigin &&
    statusOrigin.horizontal === 'right' && {
      right: 0,
    },
    size === 'xsmall' && {
      height: rem(8),
      width: rem(8),
      borderWidth: rem(1),
    },
    size === 'small' && {
      height: rem(12),
      width: rem(12),
      borderWidth: rem(2),
    },
    size === 'medium' && {
      height: rem(12),
      width: rem(12),
      borderWidth: rem(2),
    },
    size === 'large' && {
      height: rem(16),
      width: rem(16),
      borderWidth: rem(2),
    },
    size === 'xlarge' && {
      height: rem(16),
      width: rem(16),
      borderWidth: rem(2),
    },
    size === '2xlarge' && {
      height: rem(16),
      width: rem(16),
      borderWidth: rem(2),
    },
  ]
);
