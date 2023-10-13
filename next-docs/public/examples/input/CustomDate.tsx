import { Input, Label } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <div className="w-full">
        <Label>Date with placeholder</Label>
        <Input
          type="text"
          aria-label="Date"
          placeholder="yy/mm/dd"
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => (e.target.type = 'text')}
          pattern="[0-9]{2}/[0-9]{2}/[0-9]{2}"
        />
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
