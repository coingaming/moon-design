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
  }) => [
    {
      marginBottom: rem(4),
    },
    isStartEdge && {
      backgroundColor: hover.secondary,
      borderTopLeftRadius: newTokens.borderRadius.medium,
      borderBottomLeftRadius: newTokens.borderRadius.medium,
    },
    isStartEdge &&
      isRtl && {
        borderTopRightRadius: newTokens.borderRadius.medium,
        borderBottomRightRadius: newTokens.borderRadius.medium,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    isEndEdge && {
      backgroundColor: hover.secondary,
      borderTopRightRadius: newTokens.borderRadius.medium,
      borderBottomRightRadius: newTokens.borderRadius.medium,
    },
    isEndEdge &&
      isRtl && {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: newTokens.borderRadius.medium,
        borderBottomLeftRadius: newTokens.borderRadius.medium,
      },
    isInRangePreview && {
      '&:hover': {
        borderTopRightRadius: newTokens.borderRadius.medium,
        borderBottomRightRadius: newTokens.borderRadius.medium,
      },
    },
    isInRangePreview &&
      isRtl && {
        '&:hover': {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: newTokens.borderRadius.medium,
          borderBottomLeftRadius: newTokens.borderRadius.medium,
        },
      },
  ]
);

export default DayWrapper;
