import React from 'react';
import { rem } from '@heathmont/moon-utils';
import addMonths from 'date-fns/addMonths';
import styled from 'styled-components';
import Footer from '../footer/Footer';
import { InputsPanel } from '../input/InputsPanel';
import { Month } from '../month/Month';
import { Sidebar } from '../sidebar/Sidebar';
import LeftArrow from './styles/LeftArrow';
import PickerContainer from './styles/PickerContainer';
import RightArrow from './styles/RightArrow';

const FirstMonth = styled.div({
  gridArea: 'firstMonth',
  width: rem(308),
  position: 'relative',
  paddingTop: rem(4),
});

const SecondMonth = styled.div({
  gridArea: 'secondMonth',
  width: rem(308),
  position: 'relative',
  paddingTop: rem(4),
});

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
  isCustom,
  setCustom,
  selectAndApply,
}) => {
  console.log('config!!!', config.withFooter);
  return (
    <PickerContainer
      isSidebar={config.withPeriodList}
      isInputsPanel={!config.hideInputs}
      isFooter={!!config.withFooter}
      isOneMonth={config.withOneMonth}
      isExpanded={isCustom}
    >
      {config.withPeriodList && (
        <Sidebar
          range={datesState.range}
          selectRange={selectRange}
          translations={translations}
          config={config}
          setCustom={setCustom}
          selectAndApply={selectAndApply}
        />
      )}
      {(isCustom || !config.withPeriodList) && (
        <>
          {!config.hideInputs && (
            <InputsPanel
              startDate={datesState.startDate}
              endDate={datesState.endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              onDateChange={onDateChange}
              translations={translations}
              config={config}
            />
          )}
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
              withHoursAndMinutes={config.withHoursAndMinutes}
            />
            {config.withOneMonth && <RightArrow onClick={nextMonth} />}
          </FirstMonth>
          {!config.withOneMonth && (
            <SecondMonth>
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
                withHoursAndMinutes={config.withHoursAndMinutes}
                isSecond={true}
              />
              <RightArrow onClick={nextMonth} />
            </SecondMonth>
          )}
          {!!config.withFooter && (
            <Footer
              config={config.withFooter}
              apply={selectAndApply}
              reset={reset}
              translations={translations}
            />
          )}
        </>
      )}
    </PickerContainer>
  );
};
