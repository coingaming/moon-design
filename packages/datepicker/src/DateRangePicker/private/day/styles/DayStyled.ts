import { rem } from '@heathmont/moon-utils';
import { rgba } from 'polished';
import styled from 'styled-components';

export type DayStyledProps = {
  isInRange?: boolean;
  isInRangePreview?: boolean;
  isStartEdge?: boolean;
  isEndEdge?: boolean;
  isToday?: boolean;
  isDisabled?: boolean;
  isStartOfWeek?: boolean;
  isEndOfWeek?: boolean;
  isRtl?: boolean;
};

const DayStyled = styled.div<DayStyledProps>(
  ({
    theme: { colorNew, newTokens, hover },
    isInRange,
    isInRangePreview,
    isStartEdge,
    isEndEdge,
    isToday,
    isDisabled,
    isStartOfWeek,
    isEndOfWeek,
    isRtl,
  }) => [
    {
      height: rem(40),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: rem(14),
      color: colorNew.bulma,
      userSelect: 'none',
      cursor: 'pointer',
      boxSizing: 'border-box',
      border: '1px solid transparent', // to prevent jumping on hover
      borderRadius: newTokens.borderRadius.surface.small,
      '&:hover': {
        color: colorNew.piccolo,
        backgroundColor: hover.secondary,
      },
    },
    (isInRange || isInRangePreview) && {
      color: colorNew.piccolo,
      borderRadius: 0,
      backgroundColor: hover.secondary,
      borderTopLeftRadius:
        isStartOfWeek && newTokens.borderRadius.surface.small,
      borderBottomLeftRadius:
        isStartOfWeek && newTokens.borderRadius.surface.small,
      borderTopRightRadius: isEndOfWeek && newTokens.borderRadius.surface.small,
      borderBottomRightRadius:
        isEndOfWeek && newTokens.borderRadius.surface.small,
    },
    (isInRange || isInRangePreview) &&
      isRtl && {
        borderTopLeftRadius: isEndOfWeek
          ? newTokens.borderRadius.surface.small
          : 0,
        borderBottomLeftRadius: isEndOfWeek
          ? newTokens.borderRadius.surface.small
          : 0,
        borderTopRightRadius: isStartOfWeek
          ? newTokens.borderRadius.surface.small
          : 0,
        borderBottomRightRadius: isStartOfWeek
          ? newTokens.borderRadius.surface.small
          : 0,
      },
    (isStartEdge || isEndEdge) && {
      background: isDisabled ? 'transparent' : colorNew.piccolo,
      color: isDisabled ? rgba(colorNew.bulma, 0.32) : colorNew.goten,
      borderRadius: newTokens.borderRadius.surface.small,
      '&:hover': {
        border: `1px solid ${colorNew.piccolo}`,
        background: colorNew.piccolo,
        color: colorNew.goten,
      },
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
    isToday && {
      fontWeight: 'bold',
    },
    isDisabled && {
      cursor: 'default',
      color: rgba(colorNew.bulma, 0.32),
      background: 'transparent',
      '&:hover': {
        color: rgba(colorNew.bulma, 0.32),
        background: 'transparent',
        border: '1px solid transparent',
      },
    },
  ]
);

export default DayStyled;
