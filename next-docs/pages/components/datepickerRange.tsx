// @ts-nocheck
import React from 'react';
import Preview from '../../components/codePreview/Preview';
import Table from '../../components/Table';
import Default from '../../public/examples/datePicker/Default';
import RangeCalendar from '../../public/examples/datePicker/RangeCalendar';
import RangeCalendarDisabled from '../../public/examples/datePicker/RangeCalendarDisabled';
import RangeCalendarDisabled2 from '../../public/examples/datePicker/RangeCalendarDisabled2';
import RangeCalendarDisabled3 from '../../public/examples/datePicker/RangeCalendarDisabled3';
import RangeCalendarDisabled4 from '../../public/examples/datePicker/RangeCalendarDisabled4';
import RangeCalendarOneMonth from '../../public/examples/datePicker/RangeCalendarOneMonth';
import RangeCalendarRtl from '../../public/examples/datePicker/RangeCalendarRtl';
import RangeCalendarWithChip from '../../public/examples/datePicker/RangeCalendarWithChip';
import RangeCalendarWithFooter from '../../public/examples/datePicker/RangeCalendarWithFooter';
import RangeCalendarWithPeriod from '../../public/examples/datePicker/RangeCalendarWithPeriod';

import useExamples from '../../utils/useExamples';

export default function PageDatepicker() {
  const examples = useExamples('datePicker');

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Datepicker Range</h1>
        {/* <p className="text-lg mt-4">Datepicker.</p> */}
      </section>

      {/* RangeCalendar */}
      <section className="mt-8">
        <Preview
          title="RangeCalendar"
          preview={<RangeCalendar />}
          code={examples ? examples.RangeCalendar : 'Loading'}
        />
      </section>

      {/* RangeCalendarWithPeriod */}
      <section className="mt-8">
        <Preview
          title="Range Calendar with predefined period list"
          preview={<RangeCalendarWithPeriod />}
          code={examples ? examples.RangeCalendarWithPeriod : 'Loading'}
        />
      </section>

      {/* RangeCalendarWithChip */}
      <section className="mt-8">
        <Preview
          title="Range Calendar without input"
          preview={<RangeCalendarWithChip />}
          code={examples ? examples.RangeCalendarWithChip : 'Loading'}
        />
      </section>

      {/* RangeCalendarOneMonth */}
      <section className="mt-8">
        <Preview
          title="Range Calendar one month"
          preview={<RangeCalendarOneMonth />}
          code={examples ? examples.RangeCalendarOneMonth : 'Loading'}
        />
      </section>

      {/* RangeCalendarWithFooter */}
      <section className="mt-8">
        <Preview
          title="Range Calendar with footer"
          preview={<RangeCalendarWithFooter />}
          code={examples ? examples.RangeCalendarWithFooter : 'Loading'}
        />
      </section>

      {/* RangeCalendarRtl */}
      <section className="mt-8">
        <Preview
          title="Range Calendar RTL"
          preview={<RangeCalendarRtl />}
          code={examples ? examples.RangeCalendarRtl : 'Loading'}
        />
      </section>

      {/* RangeCalendarDisabled */}
      <section className="mt-8">
        <Preview
          title="Range Calendar: Marking day as disabled"
          preview={<RangeCalendarDisabled />}
          code={examples ? examples.RangeCalendarDisabled : 'Loading'}
        />
      </section>

      {/* RangeCalendarDisabled2 */}
      <section className="mt-8">
        <Preview
          title="Range Calendar: Marking several days as disabled"
          preview={<RangeCalendarDisabled2 />}
          code={examples ? examples.RangeCalendarDisabled2 : 'Loading'}
        />
      </section>

      {/* RangeCalendarDisabled3 */}
      <section className="mt-8">
        <Preview
          title="Range Calendar: Marking days range as disabled"
          preview={<RangeCalendarDisabled3 />}
          code={examples ? examples.RangeCalendarDisabled3 : 'Loading'}
        />
      </section>

      {/* RangeCalendarDisabled4 */}
      <section className="mt-8">
        <Preview
          title="Range Calendar: Marking inner days range as disabled"
          preview={<RangeCalendarDisabled4 />}
          code={examples ? examples.RangeCalendarDisabled4 : 'Loading'}
        />
      </section>

      {/* Default */}
      <section className="mt-8">
        <Preview
          title="Datepicker"
          preview={<Default />}
          code={examples ? examples.Default : 'Loading'}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Props for RangeCalendar component</h2>
        <Table
          data={[
            {
              name: 'startDate',
              type: 'Date',
              required: false,
              default: '-',
              description:
                'Range start date (initialDate) to be displayed as selected',
            },
            {
              name: 'endDate',
              type: 'Date',
              required: false,
              default: '-',
              description:
                'Range end date (initialDate) to be displayed as selected',
            },
            {
              name: 'onDateChange',
              type: '({ startDate?: Date; endDate?: Date;}) => void;',
              required: true,
              default: '-',
              description: 'Event handler when the user select a range.',
            },
            {
              name: 'config',
              type: 'Config',
              required: false,
              default: '-',
              description: 'An object of range calendar configuration',
            },
            {
              name: 'hasClickedOutside',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Used with useClickOutside() hook',
            },
            {
              name: 'isOpenByDefault',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Set range calendar open by default',
            },
            {
              name: 'setIsOpen',
              type: '() => void;',
              required: false,
              default: '-',
              description: 'Event handler for open/hide range calendar.',
            },
            {
              name: 'translations',
              type: 'RangeTranslations',
              required: false,
              default: '-',
              description: 'Translations for all inner element',
            },
            {
              name: 'isRtl',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Set right to left (rtl) view for range calendar',
            },
          ]}
        />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl mb-4">Config: calendar configuration</h2>
        <Table
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
              description:
                'Sets formatted month label according to the pattern',
            },
            {
              name: 'yearLabelFormat',
              type: 'string',
              required: false,
              default: 'yyyy',
              description: 'Sets formatted year label according to the pattern',
            },
            {
              name: 'withHoursAndMinutes',
              type: 'boolean',
              required: false,
              default: 'true',
              description: 'Sets possibilities to enter time in the inputs',
            },
            {
              name: 'ranges',
              type: 'DatesRange[]',
              required: false,
              default: '',
              description:
                'Dates array for predefined states: lastMonth, lastWeek, thisWeek, nextMonth etc.',
            },
            {
              name: 'withPeriodList',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Shows period list first',
            },
            {
              name: 'withOneMonth',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Shows only one month',
            },
            {
              name: 'hideInputs',
              type: 'boolean',
              required: false,
              default: 'false',
              description: 'Hides inputs fields in range calendar',
            },
            {
              name: 'withFooter',
              type: 'boolean | { isApplyBtn?: boolean; isCanselBtn?: boolean; isClearBtn?: boolean;}',
              required: false,
              default: 'true',
              description: 'Shows/Hides footer or sets config for buttons',
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
      </section>
    </>
  );
}
