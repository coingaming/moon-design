import React from 'react';
import { Text } from '@heathmont/moon-components';
import { enGB } from 'date-fns/locale';

import { Month as MonthGrid } from './private/Month';
import { WeekDayLabels } from './private/WeekDayLabels';
import { Day } from './private/Month/Day';
import { DayInner } from './private/Month/DayInner';
import { DayNumber } from './private/DayNumber';
import { DayContent } from './private/Month/DayContent';
import { getDayNumberColor } from './private/getDayNumberColor';
import { getDayNumberLabel } from './private/getDayNumberLabel';
import { getMonthDays } from './private/getMonthDays';

type Props = {
  config: {
    weekStartsOn?: number;
    locale?: Locale;
  };
  cursorDate: Date;
  renderDayProps?: (date: Date) => object;
  renderDayContent?: (date: Date) => React.ReactNode;
  renderNearDayNumber?: (date: Date) => React.ReactNode;
};

const Month: React.FC<Props> = ({
  config = {},
  cursorDate,
  renderDayProps = () => {},
  renderDayContent = () => null,
  renderNearDayNumber = () => null,
}) => {
  const conf = {
    weekStartsOn: 1 as any,
    locale: enGB,
    ...config,
  };
  return (
    <MonthGrid>
      <WeekDayLabels config={conf} />
      {getMonthDays({ date: cursorDate, weekStartsOn: conf.weekStartsOn }).map(
        date => (
          <Day key={date.toString()} {...renderDayProps(date)}>
            <DayInner>
              <DayNumber>
                <Text size={20} color={getDayNumberColor(cursorDate, date)}>
                  {getDayNumberLabel(cursorDate, date)}
                </Text>
                {renderNearDayNumber(date)}
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
