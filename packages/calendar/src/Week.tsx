import React from 'react';
import { enGB } from 'date-fns/locale';
import { Text } from '@heathmont/moon-components';

import { WeekGrid } from './private/Week/WeekGrid';
import { WeekDayLabels } from './private/WeekDayLabels';
import { getWeekDays } from './private/getWeekDays';
import { WeekDay } from './private/Week/WeekDay';
import { getDayNumberLabel } from './private/getDayNumberLabel';
import { getDayNumberColor } from './private/getDayNumberColor';
import { WeekDayContent } from './private/Week/WeekDayContent';
import { DayNumber } from './private/DayNumber';

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

const Week: React.FC<Props> = ({
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
    <WeekGrid>
      <WeekDayLabels config={conf} />
      {getWeekDays({ cursorDate, weekStartsOn: conf.weekStartsOn }).map(
        date => (
          <WeekDay key={date.toString()} {...renderDayProps(date)}>
            <DayNumber>
              <Text size={20} color={getDayNumberColor(cursorDate, date)}>
                {getDayNumberLabel(cursorDate, date)}
              </Text>
              {renderNearDayNumber(date)}
            </DayNumber>
            <WeekDayContent>{renderDayContent(date)}</WeekDayContent>
          </WeekDay>
        )
      )}
    </WeekGrid>
  );
};

export default Week;
