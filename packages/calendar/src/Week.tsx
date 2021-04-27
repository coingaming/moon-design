import React from 'react';
import { enGB } from 'date-fns/locale';
import { Text } from '@heathmont/moon-components';
import isWeekend from 'date-fns/isWeekend';

import { WeekGrid } from './private/Week/WeekGrid';
import { WeekDayLabels } from './private/WeekDayLabels';
import { getWeekDays } from './private/getWeekDays';
import { WeekDay } from './private/Week/WeekDay';
import { getDayNumberLabel } from './private/getDayNumberLabel';
import { getDayNumberColor } from './private/getDayNumberColor';
import { DayNumber } from './private/DayNumber';

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

const Week: React.FC<Props> = ({
  config = {},
  cursorDate,
  renderDayProps = () => ({}),
  renderNearDayNumber,
  renderDayContent,
  renderWeekDayLabel,
  isWeekendMinimized = false,
}) => {
  const conf = {
    weekStartsOn: 1 as any,
    locale: enGB,
    ...config,
  };
  return (
    <WeekGrid
      weekStartsOn={conf.weekStartsOn}
      isWeekendMinimized={isWeekendMinimized}
    >
      <WeekDayLabels config={conf} renderWeekDayLabel={renderWeekDayLabel} />
      {getWeekDays({ cursorDate, weekStartsOn: conf.weekStartsOn }).map(
        (date) => (
          <WeekDay
            isWeekend={isWeekend(date)}
            key={date.toString()}
            {...renderDayProps(date)}
          >
            <DayNumber>
              <Text size={20} color={getDayNumberColor(cursorDate, date)}>
                {getDayNumberLabel(cursorDate, date)}
              </Text>
              {renderNearDayNumber ? renderNearDayNumber(date) : null}
            </DayNumber>
            {renderDayContent ? renderDayContent(date) : null}
          </WeekDay>
        )
      )}
    </WeekGrid>
  );
};

export default Week;
