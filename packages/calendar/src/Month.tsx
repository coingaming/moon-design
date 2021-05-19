import React from 'react';
import { Text } from '@heathmont/moon-components';
import { enGB } from 'date-fns/locale';
import isWeekend from 'date-fns/isWeekend';

import { MonthGrid } from './private/Month/MonthGrid';
import { WeekDayLabels } from './private/WeekDayLabels';
import { Day } from './private/Month/Day';
import { DayInner } from './private/Month/DayInner';
import { DayNumber } from './private/DayNumber';
import { getDayNumberColor } from './private/getDayNumberColor';
import { getDayNumberLabel } from './private/getDayNumberLabel';
import { getMonthDays } from './private/getMonthDays';

type Props = {
  config?: {
    weekStartsOn?: number;
    locale?: Locale;
  };
  cursorDate: Date;
  renderDayProps?: (date: Date) => object;
  renderDayContent?: (date: Date) => React.ReactNode;
  renderNearDayNumber?: (date: Date) => React.ReactNode;
  renderWeekDayLabel?: (label: string, index: number) => React.ReactNode;
  isWeekendMinimized?: boolean;
};

const Month: React.FC<Props> = ({
  config = {},
  cursorDate,
  renderDayProps = () => ({}),
  renderDayContent,
  renderNearDayNumber,
  renderWeekDayLabel,
  isWeekendMinimized = false,
}) => {
  const conf = {
    weekStartsOn: 1 as any,
    locale: enGB,
    ...config,
  };
  return (
    <MonthGrid
      weekStartsOn={conf.weekStartsOn}
      isWeekendMinimized={isWeekendMinimized}
    >
      <WeekDayLabels config={conf} renderWeekDayLabel={renderWeekDayLabel} />
      {getMonthDays({ date: cursorDate, weekStartsOn: conf.weekStartsOn }).map(
        (date) => (
          <Day key={date.toString()} {...renderDayProps(date)}>
            <DayInner isWeekend={isWeekend(date)}>
              <DayNumber>
                <Text size={20} color={getDayNumberColor(cursorDate, date)}>
                  {getDayNumberLabel(cursorDate, date)}
                </Text>
                {renderNearDayNumber ? renderNearDayNumber(date) : null}
              </DayNumber>
              {renderDayContent ? renderDayContent(date) : null}
            </DayInner>
          </Day>
        ),
      )}
    </MonthGrid>
  );
};

export default Month;
