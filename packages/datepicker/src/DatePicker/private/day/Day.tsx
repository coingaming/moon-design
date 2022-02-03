import React from 'react';
import { rem } from '@heathmont/moon-utils';
import format from 'date-fns/format';
import styled from 'styled-components';
import DayContainer from './styles/DayContainer';

type DayProps = {
  date: Date;
  isSameMonth: boolean;
  isStartEdge: boolean;
  isToday: boolean;
  onDayClick: (date?: Date) => any;
  isDisabled?: boolean;
};

const DayWrapper = styled.div({
  margin: rem(2),
});

const EmptyCell = styled.div({
  height: rem(40),
});

const formatLabel = (date: Date) => format(date, 'd');

export const Day: React.FC<DayProps> = ({
  date,
  isSameMonth,
  isStartEdge,
  onDayClick,
  isToday,
  isDisabled,
}) => {
  if (!isSameMonth) {
    return <EmptyCell />;
  }

  const onClick = () => !isDisabled && onDayClick(date);

  return (
    <DayWrapper>
      <DayContainer
        isStartEdge={isStartEdge}
        isToday={isToday}
        isDisabled={isDisabled}
        onClick={onClick}
        test-id="day"
      >
        {formatLabel(date)}
      </DayContainer>
    </DayWrapper>
  );
};
