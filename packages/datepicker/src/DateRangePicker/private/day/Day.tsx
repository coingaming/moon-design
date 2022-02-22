import React from 'react';
import { rem } from '@heathmont/moon-utils';
import format from 'date-fns/format';
import styled from 'styled-components';
import DayStyled from './styles/DayStyled';
import DayWrapper from './styles/DayWrapper';

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
  onDayClick: (selectedDate: Date) => void;
  onMouseEnter: (hoveredDate: Date) => void;
  isStartOfWeek: boolean;
  isEndOfWeek?: boolean;
  isRtl?: boolean;
  isDisabled?: boolean;
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
  isRtl,
  isDisabled,
}) => {
  if (!isSameMonth) {
    return <EmptyCell />;
  }
  const onClick = () => !isDisabled && onDayClick(date);
  return (
    <DayWrapper
      isStartEdge={isStartEdge}
      isEndEdge={isEndEdge}
      isInRangePreview={isInRangePreview}
      isInRange={isInRange}
      isRtl={isRtl}
      isDisabled={isDisabled}
    >
      <DayStyled
        isStartEdge={isStartEdge}
        isEndEdge={isEndEdge}
        isInRange={isInRange}
        isInRangePreview={isInRangePreview}
        isToday={isToday}
        onClick={onClick}
        onMouseEnter={() => onMouseEnter(date)}
        isStartOfWeek={isStartOfWeek}
        isEndOfWeek={isEndOfWeek}
        isRtl={isRtl}
        isDisabled={isDisabled}
      >
        {formatLabel(date)}
      </DayStyled>
    </DayWrapper>
  );
};
