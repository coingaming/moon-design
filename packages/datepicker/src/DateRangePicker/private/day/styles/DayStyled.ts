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
      borderRadius: newTokens.borderRadius.medium,
      '&:hover': {
        color: colorNew.piccolo,
        backgroundColor: hover.secondary,
      },
    },
    (isInRange || isInRangePreview) && {
      color: colorNew.piccolo,
      borderRadius: 0,
      backgroundColor: hover.secondary,
      borderTopLeftRadius: isStartOfWeek && newTokens.borderRadius.medium,
      borderBottomLeftRadius: isStartOfWeek && newTokens.borderRadius.medium,
      borderTopRightRadius: isEndOfWeek && newTokens.borderRadius.medium,
      borderBottomRightRadius: isEndOfWeek && newTokens.borderRadius.medium,
    },
    (isInRange || isInRangePreview) &&
      isRtl && {
        borderTopLeftRadius: isEndOfWeek ? newTokens.borderRadius.medium : 0,
        borderBottomLeftRadius: isEndOfWeek ? newTokens.borderRadius.medium : 0,
        borderTopRightRadius: isStartOfWeek ? newTokens.borderRadius.medium : 0,
        borderBottomRightRadius: isStartOfWeek
          ? newTokens.borderRadius.medium
          : 0,
      },
    (isStartEdge || isEndEdge) && {
      background: isDisabled ? 'transparent' : colorNew.piccolo,
      color: isDisabled ? rgba(colorNew.bulma, 0.32) : colorNew.goten,
      borderRadius: newTokens.borderRadius.medium,
      '&:hover': {
        border: `1px solid ${colorNew.piccolo}`,
        background: colorNew.piccolo,
        color: colorNew.goten,
      },
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
