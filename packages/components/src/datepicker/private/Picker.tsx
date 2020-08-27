import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import addMonths from 'date-fns/addMonths';

import IconArrowLeft from '../../private/icons/IconArrowLeft';
import IconArrowRight from '../../private/icons/IconArrowRight';

import { Month } from './Month';
import { Sidebar } from './Sidebar';
import { getRanges } from './helpers/getRanges';
import { InputsPanel } from './InputsPanel';

const MonthsContainer = styled.div({
  display: 'flex',
  height: rem(306),
  position: 'relative',
});

const FirstMonth = styled.div({
  marginRight: rem(24),
});

const SecondMonth = styled.div({
  marginRight: rem(11),
});

const LeftArrow = styled(IconArrowLeft as any)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.color.goten[100],
  position: 'absolute',
  left: '15px',
}));

const RightArrow = styled(IconArrowRight as any)(({ theme }) => ({
  cursor: 'pointer',
  color: theme.color.goten[100],
  position: 'absolute',
  right: '15px',
}));

const SidebarWrapper = styled.div(({ theme: { color } }) => ({
  width: rem(228),
  background: color.goku[100],
}));

const PickerContainer = styled.div(({ theme: { color } }) => ({
  display: 'flex',
  paddingTop: rem(16),
  borderRadius: rem(3),
  backgroundColor: color.goku[100],
  boxShadow: `4px 4px 12px rgba(43, 75, 206, 0.04),
    0px 10px 18px rgba(43, 75, 206, 0.04)`,
  overflow: 'hidden',
}));

export const Picker: React.FC<any> = ({
  weekDayLabels,
  onDayClick,
  onDayMouseEnter,
  // onApply,
  // textInputs,
  // setUserInput,
  range,
  // isRequired,
  // onResetClick,
  // isValidInputs,
  // NEW arguments
  firstMonthLabel,
  firstMonthYearLabel,
  secondMonthLabel,
  secondMonthYearLabel,
  firstMonth,
  secondMonth,
  cursorDate,
  startDate,
  endDate,
  hoveredDate,
  selectRange,
  nextMonth,
  prevMonth,
}) => {
  const ranges = getRanges({});

  return (
    <PickerContainer>
      <SidebarWrapper>
        <Sidebar range={range} ranges={ranges} selectRange={selectRange} />
      </SidebarWrapper>
      <div>
        <MonthsContainer>
          <LeftArrow onClick={prevMonth} />
          <FirstMonth>
            <Month
              monthDays={firstMonth}
              monthLabel={firstMonthLabel}
              year={firstMonthYearLabel}
              weekDayLabels={weekDayLabels}
              onDayClick={onDayClick}
              onMouseEnter={onDayMouseEnter}
              cursorDate={cursorDate}
              startDate={startDate}
              endDate={endDate}
              hoveredDate={hoveredDate}
            />
          </FirstMonth>
          <SecondMonth>
            <Month
              monthDays={secondMonth}
              monthLabel={secondMonthLabel}
              year={secondMonthYearLabel}
              weekDayLabels={weekDayLabels}
              onDayClick={onDayClick}
              onMouseEnter={onDayMouseEnter}
              cursorDate={addMonths(cursorDate, 1)}
              startDate={startDate}
              endDate={endDate}
              hoveredDate={hoveredDate}
            />
          </SecondMonth>
          <RightArrow onClick={nextMonth} />
        </MonthsContainer>
        <InputsPanel startDate={startDate} endDate={endDate} />
        {/* <InputsPanel
          textInputs={textInputs}
          setUserInput={setUserInput}
          onReset={onResetClick}
          isRequired={isRequired}
          onApply={onApply}
          isValidInputs={isValidInputs}
        /> */}
      </div>
    </PickerContainer>
  );
};
