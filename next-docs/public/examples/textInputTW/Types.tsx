import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <TextInput type="number" label="Number" placeholder="e.g. 12345" />
      <TextInput type="date" label="Date" />
      <TextInput type="time" label="Time" />
    </div>
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <TextInput type="datetime-local" label="Datetime local" />
      <TextInput
        type="email"
        label="Email"
        placeholder="e.g. john.doe@domain.com"
      />
      <TextInput
        type="password"
        label="Password"
        placeholder="Password"
        showPasswordText="Show"
      />
    </div>
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <TextInput
        type="search"
        label="Search"
        placeholder="e.g. Search something"
      />
      <TextInput type="tel" label="Tel" placeholder="e.g. +372 123 4567" />
      <TextInput type="url" label="Url" placeholder="e.g. https://domain.com" />
    </div>
  </>
);

export default Example;
