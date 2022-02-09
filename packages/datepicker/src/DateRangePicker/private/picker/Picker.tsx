import React from 'react';
import { rem } from '@heathmont/moon-utils';
import addMonths from 'date-fns/addMonths';
import styled from 'styled-components';
import { InputsPanel } from '../input/InputsPanel';
import { Month } from '../month/Month';
import { Sidebar } from '../sidebar/Sidebar';
import { Button } from '@heathmont/moon-components';
import LeftArrow from './styles/LeftArrow';
import RightArrow from './styles/RightArrow';
import PickerContainer from './styles/PickerContainer';

const FirstMonth = styled.div({
  gridArea: 'firstMonth',
  width: rem(308),
  position: 'relative',
});

const SecondMonth = styled.div({
  gridArea: 'secondMonth',
  width: rem(308),
  position: 'relative',
});

const Footer = styled.div(({ theme }) => ({
  gridArea: 'footer',
  display: 'flex',
  // flexDirection: 'column',
  paddingTop: rem(theme.space.default),
}));

export const Picker: React.FC<any> = ({
  datesState,
  labels,
  translations,
  config,
  onDayClick,
  onDayMouseEnter,
  firstMonth,
  secondMonth,
  selectRange,
  nextMonth,
  prevMonth,
  setStartDate,
  setEndDate,
  onDateChange,
  apply,
  reset,
  setMonth,
  setYear,
}) => (
  <PickerContainer>
    <Sidebar
      range={datesState.range}
      selectRange={selectRange}
      translations={translations}
      config={config}
    />
    <InputsPanel
      reset={reset}
      startDate={datesState.startDate}
      endDate={datesState.endDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      onDateChange={onDateChange}
      translations={translations}
      apply={apply}
      config={config}
    />
    <FirstMonth>
      <LeftArrow onClick={prevMonth} />
      <Month
        key="first"
        monthDays={firstMonth}
        monthLabel={labels.firstMonthLabel}
        year={labels.firstMonthYearLabel}
        weekDayLabels={labels.weekDayLabels}
        onDayClick={onDayClick}
        onMouseEnter={onDayMouseEnter}
        cursorDate={datesState.cursorDate}
        startDate={datesState.startDate}
        endDate={datesState.endDate}
        hoveredDate={datesState.hoveredDate}
        setMonth={setMonth}
        setYear={setYear}
      />
    </FirstMonth>
    <SecondMonth>
      <RightArrow onClick={nextMonth} />
      <Month
        key="second"
        monthDays={secondMonth}
        monthLabel={labels.secondMonthLabel}
        year={labels.secondMonthYearLabel}
        weekDayLabels={labels.weekDayLabels}
        onDayClick={onDayClick}
        onMouseEnter={onDayMouseEnter}
        cursorDate={addMonths(datesState.cursorDate, 1)}
        startDate={datesState.startDate}
        endDate={datesState.endDate}
        hoveredDate={datesState.hoveredDate}
        setMonth={setMonth}
        setYear={setYear}
      />
    </SecondMonth>
    <Footer>
      <Button
        variant="primary"
        type="button"
        onClick={apply}
        // disabled={!!hasStartDateError || !!hasEndDateError}
      >
        {translations.apply}
      </Button>
    </Footer>
  </PickerContainer>
);
