import { Input, Label } from '@heathmont/moon-core-tw';
import { TimeCalendarDate } from '@heathmont/moon-icons-tw';

const Example = () => (
  <>
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <div className="w-full">
        <Label>Date with placeholder</Label>
        <div className="relative">
          <Input
            type="text"
            aria-label="Date"
            placeholder="dd.mm.yyyy"
            className="[&[type='date']::-webkit-calendar-picker-indicator]:bg-none cursor-default [&_.datetime-calendar-button_svg]:hidden"
            onFocus={(e) => {
              e.target.type = 'date';
              e.target?.showPicker();
            }}
            onBlur={(e) => (e.target.type = 'text')}
          />
          <TimeCalendarDate className="text-bulma text-moon-24 absolute top-1/2 right-3 z-5 -mt-3 pointer-events-none " />
        </div>
      </div>
      <div className="w-full">
        <Label htmlFor="time-type">Time</Label>
        <Input type="time" id="time-type" />
      </div>
      <div className="w-full">
        <Label htmlFor="datetimelocal-type">Datetime local</Label>
        <Input type="datetime-local" id="datetimelocal-type" />
      </div>
    </div>
  </>
);

export default Example;
