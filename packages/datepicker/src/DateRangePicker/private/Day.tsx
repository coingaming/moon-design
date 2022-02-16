import React from 'react';
import { rem } from '@heathmont/moon-utils';
import format from 'date-fns/format';
import { rgba } from 'polished';
import styled from 'styled-components';

type DayStyledProps = {
  isInRange?: boolean;
  isInRangePreview?: boolean;
  isStartEdge?: boolean;
  isEndEdge?: boolean;
  isToday?: boolean;
  isDisabled?: boolean;
  isStartOfWeek?: boolean;
  isEndOfWeek?: boolean;
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
    (isStartEdge || isEndEdge) && {
      background: colorNew.piccolo,
      color: colorNew.goten,
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
    isToday && {
      fontWeight: 'bold',
    },
    isDisabled && {
      cursor: 'default',
      color: rgba(colorNew.bulma, 0.32),
      '&:hover': {
        border: '1px solid transparent',
      },
    },
  ]
);

const DayWrapper = styled.div<DayStyledProps>(
  ({
    theme: { newTokens, hover },
    isStartEdge,
    isEndEdge,
    isInRangePreview,
  }) => [
    {
      marginBottom: rem(4),
    },
    isStartEdge && {
      backgroundColor: hover.secondary,
      borderTopLeftRadius: newTokens.borderRadius.medium,
      borderBottomLeftRadius: newTokens.borderRadius.medium,
    },
    isEndEdge && {
      backgroundColor: hover.secondary,
      borderTopRightRadius: newTokens.borderRadius.medium,
      borderBottomRightRadius: newTokens.borderRadius.medium,
    },
    isInRangePreview && {
      '&:hover': {
        borderTopRightRadius: newTokens.borderRadius.medium,
        borderBottomRightRadius: newTokens.borderRadius.medium,
      },
    },
  ]
);

const EmptyCell = styled.div({
  height: rem(32),
});

const formatLabel = (date: Date) => format(date, 'd');

type DayProps = {
  date: Date;
  isSameMonth: boolean;
  isStartEdge: boolean;
  isEndEdge: boolean;
  isInRange: boolean;
  isInRangePreview: boolean;
  isToday: boolean;
  onDayClick: any;
  onMouseEnter: any;
  isStartOfWeek: boolean;
  isEndOfWeek?: boolean;
};

export const Day: React.FC<DayProps> = ({
  date,
  isSameMonth,
  isStartEdge,
  isEndEdge,
  isInRange,
  isInRangePreview,
  onDayClick,
  onMouseEnter,
  isToday,
  isStartOfWeek,
  isEndOfWeek,
}) => {
  if (!isSameMonth) {
    return <EmptyCell />;
  }

  return (
    <DayWrapper
      isStartEdge={isStartEdge}
      isEndEdge={isEndEdge}
      isInRangePreview={isInRangePreview}
      isInRange={isInRange}
    >
      <DayStyled
        isStartEdge={isStartEdge}
        isEndEdge={isEndEdge}
        isInRange={isInRange}
        isInRangePreview={isInRangePreview}
        isToday={isToday}
        onClick={() => onDayClick(date)}
        onMouseEnter={() => onMouseEnter(date)}
        isStartOfWeek={isStartOfWeek}
        isEndOfWeek={isEndOfWeek}
      >
        {formatLabel(date)}
      </DayStyled>
    </DayWrapper>
  );
};
