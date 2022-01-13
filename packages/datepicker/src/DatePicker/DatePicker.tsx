import React from 'react';
import styled from 'styled-components';
import { enGB } from 'date-fns/locale';
import { Button } from '@heathmont/moon-components';
import Calendar from './Calendar';

import getPlaceholder from './private/helpers/getPlacegolder';

export type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;

export interface Config {
  format?: string;
  monthLabelFormat?: string;
  yearLabelFormat?: string;
  weekStartsOn?: WeekStartsOn;
  withHoursAndMinutes?: boolean;
  onlyFuture?: boolean;
  without24AndToday?: boolean;
  locale?: any;
}

export interface Translations {
  placeholder: string | JSX.Element;
  apply: string | JSX.Element;
  reset: string | JSX.Element;
}

export type DatePickerProps = {
  isOpenByDefault?: boolean;
  date?: Date;
  hasClickedOutside?: boolean;
  config?: Config;
  translations?: Translations;
  onDateChange: ({ date }: { date?: Date }) => any;
};

const Wrapper = styled.div({
  position: 'relative',
});

const DatePicker: React.FC<DatePickerProps> = ({
  isOpenByDefault,
  date,
  onDateChange,
  config,
  translations,
}) => {
  const [isOpen, setIsOpen] = React.useState(isOpenByDefault);
  const [placeholder, setPlaceholder] = React.useState(
    getPlaceholder({
      date,
      config,
      translations,
    })
  );
  return (
    <Wrapper>
      <Button variant="tertiary" onClick={() => setIsOpen(true)}>
        {placeholder}
      </Button>
      {isOpen && (
        <Calendar
          date={date}
          config={config}
          onDateChange={onDateChange}
          translations={translations}
          // hasClickedOutside={hasClickedOutside}
          setIsOpen={setIsOpen}
          setPlaceholder={setPlaceholder}
        />
      )}
    </Wrapper>
  );
};

DatePicker.defaultProps = {
  isOpenByDefault: false,
  translations: {
    placeholder: 'Select Dates',
    apply: 'Apply',
    reset: 'Reset',
  },
  config: {
    format: "yyyy-MM-dd'T'HH:mm",
    monthLabelFormat: 'MMMM',
    yearLabelFormat: 'yyyy',
    weekStartsOn: 1,
    withHoursAndMinutes: false,
    onlyFuture: false,
    without24AndToday: false,
    locale: enGB,
  },
};

export default DatePicker;
