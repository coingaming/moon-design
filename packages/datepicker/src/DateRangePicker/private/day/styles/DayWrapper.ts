import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import type { DayStyledProps } from './DayStyled';

const DayWrapper = styled.div<DayStyledProps>(
  ({
    theme: { newTokens, hover },
    isStartEdge,
    isEndEdge,
    isInRangePreview,
    isRtl,
    isDisabled,
  }) => [
    {
      marginBottom: rem(4),
    },
    isStartEdge && {
      backgroundColor: isDisabled ? 'transparent' : hover.secondary,
      borderTopLeftRadius: newTokens.borderRadius.surface.small,
      borderBottomLeftRadius: newTokens.borderRadius.surface.small,
    },
    isStartEdge &&
      isRtl && {
        borderTopRightRadius: newTokens.borderRadius.surface.small,
        borderBottomRightRadius: newTokens.borderRadius.surface.small,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    isEndEdge && {
      backgroundColor: isDisabled ? 'transparent' : hover.secondary,
      borderTopRightRadius: newTokens.borderRadius.surface.small,
      borderBottomRightRadius: newTokens.borderRadius.surface.small,
    },
    isEndEdge &&
      isRtl && {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: newTokens.borderRadius.surface.small,
        borderBottomLeftRadius: newTokens.borderRadius.surface.small,
      },
    isInRangePreview && {
      '&:hover': {
        borderTopRightRadius: newTokens.borderRadius.surface.small,
        borderBottomRightRadius: newTokens.borderRadius.surface.small,
      },
    },
    isInRangePreview &&
      isRtl && {
        '&:hover': {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: newTokens.borderRadius.surface.small,
          borderBottomLeftRadius: newTokens.borderRadius.surface.small,
        },
      },
  ]
);

export default DayWrapper;
