import { Input, Label } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <div className="w-full">
        <Label>Number</Label>
        <Input type="number" placeholder="e.g. 12345" />
      </div>
      <div className="w-full">
        <Label>Date</Label>
        <Input type="date" />
      </div>
      <div className="w-full">
        <Label>Time</Label>
        <Input type="time" />
      </div>
    </div>
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <div className="w-full">
        <Label>Datetime local</Label>
        <Input type="datetime-local" />
      </div>
      <div className="w-full">
        <Label>Email</Label>
        <Input type="email" placeholder="e.g. john.doe@domain.com" />
      </div>
      <div className="w-full">
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </div>
    </div>
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <div className="w-full">
        <Label>Search</Label>
        <Input type="search" placeholder="e.g. Search something" />
      </div>
      <div className="w-full">
        <Label>Tel</Label>
        <Input type="tel" placeholder="e.g. +372 123 4567" />
      </div>
      <div className="w-full">
        <Label>Url</Label>
        <Input type="url" placeholder="e.g. https://domain.com" />
      </div>
    </div>
  </>
);

export default Example;
