//This exemple should be discussed about separate date-picker component
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
            placeholder="mm.dd.yyyy"
            className="[&[type='date']::-webkit-calendar-picker-indicator]:bg-none cursor-default [&_.datetime-calendar-button-svg]:hidden"
            onFocus={(e) => {
              e.target.type = 'date';
              e.target?.showPicker();
            }}
            onBlur={(e) => (e.target.type = 'text')}
          />
          <span className="pointer-events-none absolute top-1/2 right-3 h-6 -mt-3 w-10 bg-goku z-5">
            <TimeCalendarDate className="text-bulma text-moon-24 absolute top-1/2 right-0 -mt-3" />
          </span>
        </div>
      </div>
      <div className="w-full">
        <Label htmlFor="time-type">Time</Label>
        <div className="relative">
          <Input
            type="text"
            id="time-type"
            placeholder="Time"
            className="[&[type='date']::-webkit-calendar-picker-indicator]:bg-none cursor-default"
            onFocus={(e) => {
              e.target.type = 'time';
              e.target?.showPicker();
            }}
            onBlur={(e) => (e.target.type = 'text')}
          />
          <TimeCalendarDate className="text-bulma text-moon-24 absolute top-1/2 right-3 z-5 -mt-3" />
        </div>
      </div>
      <div className="w-full">
        <Label htmlFor="datetimelocal-type">Datetime local</Label>
        <Input
          type="datetime-local"
          id="datetimelocal-type"
          className="[&[type='date']::-webkit-calendar-picker-indicator]:bg-none cursor-default [&_#calendar-button]:hidden"
        />
      </div>
    </div>
  </>
);

export default Example;
