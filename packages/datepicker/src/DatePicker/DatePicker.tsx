import React from 'react';
import { Button } from '@heathmont/moon-components';
import { enGB } from 'date-fns/locale';
import styled from 'styled-components';
import useClickOutside from '../hooks/useClickOutside';
import Calendar from './Calendar';
import getPlaceholder from './private/helpers/getPlacegolder';
import type { DisabledDaysRange } from '../private/helper/checkIsDisabledDay';

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
  disabledDays?: Date | Date[] | DisabledDaysRange;
  yearsRange?: {
    min?: number;
    max?: number;
  };
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
  display: 'inline-block',
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
  const [ref, hasClickedOutside] = useClickOutside();

  return (
    <div>
      <Wrapper ref={ref}>
        <Button variant="tertiary" onClick={() => setIsOpen(true)}>
          {placeholder}
        </Button>
        {isOpen && (
          <Calendar
            date={date}
            config={config}
            onDateChange={onDateChange}
            translations={translations}
            hasClickedOutside={hasClickedOutside}
            setIsOpen={setIsOpen}
            setPlaceholder={setPlaceholder}
          />
        )}
      </Wrapper>
    </div>
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
    format: 'yyyy-MM-dd',
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
