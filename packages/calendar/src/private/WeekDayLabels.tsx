import React from 'react';
import { Text } from '@heathmont/moon-components';

import { WeekDayName } from './WeekDayName';
import { getWeekDayLabels } from './getWeekDayLabels';

type Props = {
  config: {
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    locale?: Locale;
  };
};

export const WeekDayLabels: React.FC<Props> = ({ config }) => (
  <>
    {getWeekDayLabels(config).map((weekDayName) => (
      <WeekDayName key={weekDayName}>
        <Text size={12} color="trunks.100">
          {weekDayName}
        </Text>
      </WeekDayName>
    ))}
  </>
);
