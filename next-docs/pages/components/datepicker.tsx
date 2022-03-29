// @ts-nocheck
import React from 'react';
import Preview from '../../components/codePreview/Preview';
import PropsTable from '../../components/PropsTable';
import Calendar from '../../public/examples/datePicker/Calendar';
import CalendarDisabledDay from '../../public/examples/datePicker/CalendarDisabledDay';
import CalendarDisabledDays from '../../public/examples/datePicker/CalendarDisabledDays';
import CalendarDisabledRange from '../../public/examples/datePicker/CalendarDisabledRange';
import CalendarDisabledRange2 from '../../public/examples/datePicker/CalendarDisabledRange2';
import DatePicker from '../../public/examples/datePicker/DatePicker';
import useExamples from '../../utils/useExamples';

const PageDatepicker = () => {
  const examples = useExamples('datePicker');
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Datepicker</h1>
        <p className="text-lg mt-4">
          A simple datepicker component build with date-fns.
        </p>
        <p className="text-lg mt-4">
          Since this component doesn’t hold the selected day in its state, you
          have to hold it in your component’s state as the user interacts with
          the calendar.
        </p>
        <p className="text-lg">
          For this, you can use the following props: <b>date</b> - to highlight
          the day cell to show in the calendar which day has been selected;
          <b> onDateChange</b> - handler is holding the selected day in its own
          state;
        </p>
        <p className="text-lg mt-4">
          You also can configure the component with <b>config</b> prop.
        </p>
        <p className="text-lg">
          For example, if you want to mark days as disabled, you can use
          <b> config.disabledDays</b> setting. These days do not respond to the
          user’s interaction and should appear as “disabled” (grayed out) on the
          calendar.
        </p>
        <p className="text-lg">
          Or you can set the range of available for choosing years, using
          <b> config.yearsRang</b> prop.
        </p>
        <p className="text-lg mt-4">
          The whole list of all available props is in the table below.
        </p>
        <p className="text-lg mt-4">
          Datepicker - this component is rendering the Button component and
          Calendar in an overlay. It has extended props and hide/show logic out
          of the box.
        </p>
      </section>

      {/* DatePicker */}
      <section className="mt-8">
        <Preview
          title="Datepicker"
          preview={<DatePicker />}
          code={examples ? examples.DatePicker : 'Loading'}
        />
      </section>
      <section className="mt-8"></section>

      {/* DatePickerCalendar */}
      <section className="mt-8">
        <p className="text-lg pt-8">
          You also can use only the Calendar component if you have another
          trigger element (for example input instead of button) and you need
          more control.
        </p>
        <Preview
          title="Calendar"
          preview={<Calendar />}
          code={examples ? examples.Calendar : 'Loading'}
        />
      </section>

      {/* Calendar DisabledDay */}
      <section className="mt-8">
        <Preview
          title="Calendar: Marking day as disabled"
          preview={<CalendarDisabledDay />}
          code={examples ? examples.CalendarDisabledDay : 'Loading'}
        />
      </section>

      {/* Calendar DisabledDays */}
      <section className="mt-8">
        <Preview
          title="Calendar: Marking several days as disabled"
          preview={<CalendarDisabledDays />}
          code={examples ? examples.CalendarDisabledDays : 'Loading'}
        />
      </section>

      {/* Calendar DisabledRange */}
      <section className="mt-8">
        <Preview
          title="Calendar: Marking days range as disabled"
          preview={<CalendarDisabledRange />}
          code={examples ? examples.CalendarDisabledRange : 'Loading'}
        />
      </section>

      {/* Calendar DisabledRange2 */}
      <section className="mt-8">
        <Preview
          title="Calendar: Marking inner days range as disabled"
          preview={<CalendarDisabledRange2 />}
          code={examples ? examples.CalendarDisabledRange2 : 'Loading'}
        />
      </section>

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

      <section className="mt-8">
        <p className="text-lg pt-8">
          DatePicker has the same props as Calendar and extended by next props:
        </p>
      </section>

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
