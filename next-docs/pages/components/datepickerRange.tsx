import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import RangeCalendar from '../../public/examples/datePickerRange/RangeCalendar';
import RangeCalendarDisabled from '../../public/examples/datePickerRange/RangeCalendarDisabled';
import RangeCalendarDisabled2 from '../../public/examples/datePickerRange/RangeCalendarDisabled2';
import RangeCalendarDisabled3 from '../../public/examples/datePickerRange/RangeCalendarDisabled3';
import RangeCalendarDisabled4 from '../../public/examples/datePickerRange/RangeCalendarDisabled4';
import RangeCalendarOneMonth from '../../public/examples/datePickerRange/RangeCalendarOneMonth';
import RangeCalendarOnlyDate from '../../public/examples/datePickerRange/RangeCalendarOnlyDate';
import RangeCalendarRtl from '../../public/examples/datePickerRange/RangeCalendarRtl';
import RangeCalendarWithChip from '../../public/examples/datePickerRange/RangeCalendarWithChip';
import RangeCalendarWithoutFooter from '../../public/examples/datePickerRange/RangeCalendarWithoutFooter';
import RangeCalendarWithPeriod from '../../public/examples/datePickerRange/RangeCalendarWithPeriod';
import useExamples from '../../utils/useExamples';

const PageDatepicker = () => {
  const examples = useExamples('datePickerRange');
  return (
    <>
      <ComponentPageDescription title="Range">
        <p>Range datepicker component build with date-fns.</p>
        <p>
          Since this component doesn't hold the selected days in its state, you
          have to hold they in your component's state as the user interacts with
          the calendar.
        </p>
        <p>For this, you can use the following props:</p>
        <p>
          <span className="font-medium">startDate</span> and{' '}
          <span className="font-medium">endDate</span> - to highlight the first
          and last day's cells to show in the calendar which range has been
          selected;
          <span className="font-medium"> onDateChange</span> - handler is
          holding the selected days in its own state;
        </p>
        <p>
          You can configure the component with{' '}
          <span className="font-medium">config</span> prop. The whole list of
          the config props you can find below: "Config: calendar configuration"
          table.
        </p>
        <p>
          Also, you can set the needed translation for the button in the footer
          or for the period list. Just use translations prop. The whole list of
          the translations props you can find below: "RangeTranslations" table.
        </p>
      </ComponentPageDescription>
      <Preview
        title="RangeCalendar"
        preview={<RangeCalendar />}
        code={examples ? examples.RangeCalendar : 'Loading'}
      />
      <Preview
        title="Range Calendar with predefined period list"
        preview={<RangeCalendarWithPeriod />}
        code={examples ? examples.RangeCalendarWithPeriod : 'Loading'}
      />
      <Preview
        title="Range Calendar only date"
        preview={<RangeCalendarOnlyDate />}
        code={examples ? examples.RangeCalendarOnlyDate : 'Loading'}
      />
      <Preview
        title="Range Calendar without input"
        preview={<RangeCalendarWithChip />}
        code={examples ? examples.RangeCalendarWithChip : 'Loading'}
      />
      <Preview
        title="Range Calendar one month"
        preview={<RangeCalendarOneMonth />}
        code={examples ? examples.RangeCalendarOneMonth : 'Loading'}
      />
      <Preview
        title="Range Calendar without footer"
        preview={<RangeCalendarWithoutFooter />}
        code={examples ? examples.RangeCalendarWithoutFooter : 'Loading'}
      />
      <Preview
        title="Range Calendar RTL"
        preview={<RangeCalendarRtl />}
        code={examples ? examples.RangeCalendarRtl : 'Loading'}
      />
      <Preview
        title="Range Calendar: Marking day as disabled"
        preview={<RangeCalendarDisabled />}
        code={examples ? examples.RangeCalendarDisabled : 'Loading'}
      />
      <Preview
        title="Range Calendar: Marking several days as disabled"
        preview={<RangeCalendarDisabled2 />}
        code={examples ? examples.RangeCalendarDisabled2 : 'Loading'}
      />
      <Preview
        title="Range Calendar: Marking days range as disabled"
        preview={<RangeCalendarDisabled3 />}
        code={examples ? examples.RangeCalendarDisabled3 : 'Loading'}
      />
      <Preview
        title="Range Calendar: Marking inner days range as disabled"
        preview={<RangeCalendarDisabled4 />}
        code={examples ? examples.RangeCalendarDisabled4 : 'Loading'}
      />
      <PropsTable
        title="Props for RangeCalendar componen"
        data={[
          {
            name: 'startDate',
            type: 'Date',
            required: 'false',
            default: '-',
            description:
              'Range start date (initialDate) to be displayed as selected',
          },
          {
            name: 'endDate',
            type: 'Date',
            required: 'false',
            default: '-',
            description:
              'Range end date (initialDate) to be displayed as selected',
          },
          {
            name: 'onDateChange',
            type: '({ startDate?: Date; endDate?: Date;}) => void;',
            required: 'true',
            default: '-',
            description: 'Event handler when the user select a range.',
          },
          {
            name: 'config',
            type: 'Config',
            required: 'false',
            default: '-',
            description: 'An object of range calendar configuration',
          },
          {
            name: 'hasClickedOutside',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Used with useClickOutside() hook',
          },
          {
            name: 'isOpenByDefault',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Set range calendar open by default',
          },
          {
            name: 'setIsOpen',
            type: '() => void;',
            required: 'false',
            default: '-',
            description: 'Event handler for open/hide range calendar.',
          },
          {
            name: 'translations',
            type: 'RangeTranslations',
            required: 'false',
            default: '-',
            description: 'Translations for all inner element',
          },
          {
            name: 'isRtl',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Set right to left (rtl) view for range calendar',
          },
        ]}
      />
      <PropsTable
        title="Config: calendar configuration"
        data={[
          {
            name: 'weekStartsOn',
            type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
            required: 'false',
            default: '1',
            description: 'Overwrites the first day of the week.',
          },
          {
            name: 'monthLabelFormat',
            type: 'string',
            required: 'false',
            default: 'MMMM',
            description: 'Sets formatted month label according to the pattern',
          },
          {
            name: 'yearLabelFormat',
            type: 'string',
            required: 'false',
            default: 'yyyy',
            description: 'Sets formatted year label according to the pattern',
          },
          {
            name: 'withHoursAndMinutes',
            type: 'boolean',
            required: 'false',
            default: 'true',
            description: 'Sets possibilities to enter time in the inputs',
          },
          {
            name: 'ranges',
            type: 'DatesRange[]',
            required: 'false',
            default: '',
            description:
              'Dates array for predefined states: lastMonth, lastWeek, thisWeek, nextMonth etc.',
          },
          {
            name: 'withPeriodList',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Shows period list first',
          },
          {
            name: 'withOneMonth',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Shows only one month',
          },
          {
            name: 'hideInputs',
            type: 'boolean',
            required: 'false',
            default: 'false',
            description: 'Hides inputs fields in range calendar',
          },
          {
            name: 'withFooter',
            type: 'boolean | { isApplyBtn?: boolean; isCancelBtn?: boolean; isClearBtn?: boolean;}',
            required: 'false',
            default: 'true',
            description: 'Shows/Hides footer or sets config for buttons',
          },
          {
            name: 'disabledDays',
            type: 'Date | Date[] | DisabledDaysRange: { from?: Date; to?: Date; }',
            required: 'false',
            default: '-',
            description: 'Day(s) that should appear as disabled',
          },
          {
            name: 'yearsRange',
            type: '{ min?: number; max?: number; }',
            required: 'false',
            default: '-',
            description: 'Sets possible choosing years range',
          },
        ]}
      />
      <PropsTable
        title="RangeTranslations"
        data={[
          {
            name: 'apply',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'Apply',
            description: 'apply button',
          },
          {
            name: 'reset',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'Reset',
            description: 'reset button',
          },
          {
            name: 'cancel',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'Cancel',
            description: 'Cancel button',
          },
          {
            name: 'lastMonth',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'Last month',
            description: 'period list',
          },
          {
            name: 'lastWeek',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'Last week',
            description: 'period list',
          },
          {
            name: 'last24hours',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'Last 24 hours',
            description: 'period list',
          },
          {
            name: 'yesterday',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'Yesterday',
            description: 'period list',
          },
          {
            name: 'today',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'Today',
            description: 'period list',
          },
          {
            name: 'tomorrow',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'Tomorrow',
            description: 'period list',
          },
          {
            name: 'thisWeek',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'This week',
            description: 'period list',
          },
          {
            name: 'nextWeek',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'Next week',
            description: 'period list',
          },
          {
            name: 'thisMonth',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'This month',
            description: 'period list',
          },
          {
            name: 'nextMonth',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'Next month',
            description: 'period list',
          },
          {
            name: 'custom',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'Custom',
            description: 'period list',
          },
          {
            name: 'labelStartDate',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'Start date & time',
            description: '-',
          },
          {
            name: 'labelEndDate',
            type: 'string | JSX.Element',
            required: 'false',
            default: 'End date & time',
            description: '-',
          },
        ]}
      />
    </>
  );
};

export default PageDatepicker;
