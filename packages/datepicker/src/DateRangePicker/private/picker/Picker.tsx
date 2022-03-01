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
import type { DatesRange } from '../helpers/getDatesFromRange';
import type { DatepickerState } from '../hooks/useRangeCalendar';
import type RangeConfig from '../types/RangeConfig';
import type RangeTranslations from '../types/RangeTranslations';

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

type PickerProps = {
  datesState: DatepickerState;
  labels: {
    firstMonthLabel: string;
    firstMonthYearLabel: string;
    secondMonthLabel: string;
    secondMonthYearLabel: string;
    weekDayLabels: string[] | undefined;
  };
  translations?: RangeTranslations;
  config?: RangeConfig;
  onDayClick: (selectedDate: Date) => void;
  onDayMouseEnter: (hoveredDate: Date) => void;
  firstMonth: Date[];
  secondMonth: Date[];
  nextMonth: () => void;
  prevMonth: () => void;
  setStartDate: (startDate: Date) => void;
  setEndDate: (endDate: Date) => void;
  onDateChange: ({
    startDate,
    endDate,
    range,
  }: {
    startDate?: Date;
    endDate?: Date;
    range?: DatesRange;
  }) => any;
  apply: () => void;
  reset: () => void;
  cancel: () => void;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
  isCustom: boolean;
  setCustom: React.Dispatch<React.SetStateAction<boolean>>;
  selectAndApply: (newRange: any) => void;
  isRtl?: boolean;
};

export const Picker: React.FC<PickerProps> = ({
  datesState,
  labels,
  translations,
  config,
  onDayClick,
  onDayMouseEnter,
  firstMonth,
  secondMonth,
  nextMonth,
  prevMonth,
  setStartDate,
  setEndDate,
  onDateChange,
  apply,
  reset,
  cancel,
  setMonth,
  setYear,
  isCustom,
  setCustom,
  selectAndApply,
  isRtl,
}) => (
  <PickerContainer
    isSidebar={config?.withPeriodList}
    isInputsPanel={!config?.hideInputs}
    isFooter={!!config?.withFooter}
    isOneMonth={config?.withOneMonth}
    isExpanded={isCustom}
  >
    {config?.withPeriodList && (
      <Sidebar
        range={datesState.range}
        translations={translations}
        config={config}
        isCustom={isCustom}
        setCustom={setCustom}
        selectAndApply={selectAndApply}
      />
    )}
    {(isCustom || !config?.withPeriodList) && (
      <>
        {!config?.hideInputs && (
          <InputsPanel
            startDate={datesState.startDate}
            endDate={datesState.endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            onDateChange={onDateChange}
            translations={translations}
            config={config}
            isRtl={isRtl}
          />
        )}
        <FirstMonth>
          <LeftArrow onClick={prevMonth} isrtl={isRtl} />
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
            config={config}
            isRtl={isRtl}
          />
          {config?.withOneMonth && (
            <RightArrow onClick={nextMonth} isrtl={isRtl} />
          )}
        </FirstMonth>
        {!config?.withOneMonth && (
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
              config={config}
              isSecond={true}
              isRtl={isRtl}
            />
            <RightArrow onClick={nextMonth} isrtl={isRtl} />
          </SecondMonth>
        )}
        {!!config?.withFooter && (
          <Footer
            config={config.withFooter}
            apply={apply}
            reset={reset}
            cancel={cancel}
            translations={translations}
          />
        )}
      </>
    )}
  </PickerContainer>
);
