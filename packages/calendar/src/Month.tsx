import React from 'react';
import { Text } from '@heathmont/moon-components';
import { enGB } from 'date-fns/locale';

import { Month as MonthGrid } from './private/Month';
import { WeekDayName } from './private/WeekDayName';
import { Day } from './private/Day';
import { DayInner } from './private/DayInner';
import { DayNumber } from './private/DayNumber';
import { DayContent } from './private/DayContent';
import { getDayNumberColor } from './private/getDayNumberColor';
import { getDayNumberLabel } from './private/getDayNumberLabel';
import { getMonthDays } from './private/getMonthDays';
import { getWeekDayLabels } from './private/getWeekDayLabels';

type Props = {
  config: {
    weekStartsOn?: number;
    locale?: Locale;
  };
  cursorDate: Date;
  renderDayContent?: (date: Date) => React.ReactNode;
};

const Month: React.FC<Props> = ({
  config = {},
  cursorDate,
  renderDayContent = () => null,
}) => {
  const conf = {
    weekStartsOn: 1 as any,
    locale: enGB,
    ...config,
  };
  return (
    <MonthGrid>
      {getWeekDayLabels(conf).map(weekDayName => (
        <WeekDayName key={weekDayName}>
          <Text size={12} color="trunks.100">
            {weekDayName}
          </Text>
        </WeekDayName>
      ))}
      {getMonthDays({ date: cursorDate, weekStartsOn: conf.weekStartsOn }).map(
        date => (
          <Day key={date.toString()}>
            <DayInner>
              <DayNumber>
                <Text size={20} color={getDayNumberColor(cursorDate, date)}>
                  {getDayNumberLabel(cursorDate, date)}
                </Text>
              </DayNumber>
              <DayContent>{renderDayContent(date)}</DayContent>
            </DayInner>
          </Day>
        )
      )}
    </MonthGrid>
  );
};

export default Month;
