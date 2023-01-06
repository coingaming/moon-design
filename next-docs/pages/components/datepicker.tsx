import React from 'react';
import Preview from '../../components/codePreview/Preview';
import ComponentPageDescription from '../../components/ComponentPageDescription';
import PropsTable from '../../components/PropsTable';
import Calendar from '../../public/styledExamples/datePicker/Calendar';
import CalendarDisabledDay from '../../public/styledExamples/datePicker/CalendarDisabledDay';
import CalendarDisabledDays from '../../public/styledExamples/datePicker/CalendarDisabledDays';
import CalendarDisabledRange from '../../public/styledExamples/datePicker/CalendarDisabledRange';
import CalendarDisabledRange2 from '../../public/styledExamples/datePicker/CalendarDisabledRange2';
import DatePicker from '../../public/styledExamples/datePicker/DatePicker';
import useExamples from '../../utils/useExamples';

const PageDatepicker = () => {
  const examples = useExamples('datePicker', 'styled');
  return (
    <>
      <ComponentPageDescription title="Single Date">
        <p>A simple datepicker component build with date-fns.</p>
        <p>
          Since this component doesn't hold the selected day in its state, you
          have to hold it in your component's state as the user interacts with
          the calendar.
        </p>
        <p>
          For this, you can use the following props:{' '}
          <span className="font-medium">date</span> - to highlight the day cell
          to show in the calendar which day has been selected;{' '}
          <span className="font-medium">onDateChange</span> - handler is holding
          the selected day in its own state;
        </p>
        <p>
          You also can configure the component with{' '}
          <span className="font-medium">config</span> prop.
        </p>
        <p>
          For example, if you want to mark days as disabled, you can use{' '}
          <span className="font-medium">config.disabledDays</span> setting.
          These days do not respond to the user's interaction and should appear
          as “disabled” (grayed out) on the calendar.
        </p>
        <p>
          Or you can set the range of available for choosing years, using{' '}
          <span className="font-medium">config.yearsRang</span> prop.
        </p>
        <p>The whole list of all available props is in the table below.</p>
        <p>
          Datepicker - this component is rendering the Button component and
          Calendar in an overlay. It has extended props and hide/show logic out
          of the box.
        </p>
      </ComponentPageDescription>
      <Preview
        title="Datepicker"
        preview={<DatePicker />}
        code={examples ? examples.DatePicker : 'Loading'}
      />
      <p className="text-moon-16">
        You also can use only the Calendar component if you have another trigger
        element (for example input instead of button) and you need more control.
      </p>
      <Preview
        title="Calendar"
        preview={<Calendar />}
        code={examples ? examples.Calendar : 'Loading'}
      />
      <Preview
        title="Calendar: Marking day as disabled"
        preview={<CalendarDisabledDay />}
        code={examples ? examples.CalendarDisabledDay : 'Loading'}
      />
      <Preview
        title="Calendar: Marking several days as disabled"
        preview={<CalendarDisabledDays />}
        code={examples ? examples.CalendarDisabledDays : 'Loading'}
      />
      <Preview
        title="Calendar: Marking days range as disabled"
        preview={<CalendarDisabledRange />}
        code={examples ? examples.CalendarDisabledRange : 'Loading'}
      />
      <Preview
        title="Calendar: Marking inner days range as disabled"
        preview={<CalendarDisabledRange2 />}
        code={examples ? examples.CalendarDisabledRange2 : 'Loading'}
      />
      <PropsTable
        title="Props for Calendar component"
        data={[
          {
            name: 'date',
            type: 'Date',
            required: false,
            default: '-',
            description: 'Day (initialDate) that should appear as selected.',
          },
          {
            name: 'onDateChange',
            type: '({ date }: { date?: Date }) => void',
            required: true,
            default: '-',
            description: 'Event handler when the user clicks on a day cell.',
          },
          {
            name: 'config',
            type: 'Config',
            required: false,
            default: '-',
            description: 'An object of calendar configuration',
          },
          {
            name: 'hasClickedOutside',
            type: 'boolean',
            required: false,
            default: 'false',
            description: 'Used with useClickOutside() hook',
          },
        ]}
      />
      <PropsTable
        title="Config: calendar configuration"
        data={[
          {
            name: 'weekStartsOn',
            type: '0 | 1 | 2 | 3 | 4 | 5 | 6',
            required: false,
            default: '1',
            description: 'Overwrites the first day of the week.',
          },
          {
            name: 'monthLabelFormat',
            type: 'string',
            required: false,
            default: 'MMMM',
            description: 'Sets formatted month label according to the pattern',
          },
          {
            name: 'yearLabelFormat',
            type: 'string',
            required: false,
            default: 'yyyy',
            description: 'Sets formatted year label according to the pattern',
          },
          {
            name: 'disabledDays',
            type: 'Date | Date[] | DisabledDaysRange: { from?: Date; to?: Date; }',
            required: false,
            default: '-',
            description: 'Day(s) that should appear as disabled',
          },
          {
            name: 'yearsRange',
            type: '{ min?: number; max?: number; }',
            required: false,
            default: '-',
            description: 'Sets possible choosing years range',
          },
        ]}
      />
      <p className="text-moon-16">
        DatePicker has the same props as Calendar and extended by next props:
      </p>
      <PropsTable
        title="DatePicker extended props"
        data={[
          {
            name: 'isOpenByDefault',
            type: 'boolean',
            required: false,
            default: '-',
            description: 'Sets is Calendar open by default',
          },
          {
            name: 'translations',
            type: `{
                placeholder: string | JSX.Element; apply: 
                string | JSX.Element; 
                reset: string | JSX.Element; }`,
            required: true,
            default: '-',
            description:
              'An object with with preset translations for button and calendar ',
          },
        ]}
      />
      <PropsTable
        title="Config extended for DatePicker"
        data={[
          {
            name: 'format',
            type: 'string',
            required: false,
            default: 'yyyy-MM-dd',
            description:
              'Sets formatted placeholder for button according to the pattern',
          },
        ]}
      />
    </>
  );
};

export default PageDatepicker;
