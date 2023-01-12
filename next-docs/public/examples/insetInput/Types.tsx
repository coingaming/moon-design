import { InsetInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <div className="w-full">
        <InsetInput type="number" placeholder="e.g. 12345">
          <InsetInput.Label>Number</InsetInput.Label>
        </InsetInput>
      </div>
      <div className="w-full">
        <InsetInput type="date">
          <InsetInput.Label>Date</InsetInput.Label>
        </InsetInput>
      </div>
      <div className="w-full">
        <InsetInput type="time">
          <InsetInput.Label>Time</InsetInput.Label>
        </InsetInput>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <div className="w-full">
        <InsetInput type="datetime-local">
          <InsetInput.Label>Datetime local</InsetInput.Label>
        </InsetInput>
      </div>
      <div className="w-full">
        <InsetInput type="email" placeholder="e.g. john.doe@domain.com">
          <InsetInput.Label>Email</InsetInput.Label>
        </InsetInput>
      </div>
      <div className="w-full">
        <InsetInput type="password" placeholder="Password">
          <InsetInput.Label>Password</InsetInput.Label>
        </InsetInput>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <div className="w-full">
        <InsetInput type="search" placeholder="e.g. Search something">
          <InsetInput.Label>Search</InsetInput.Label>
        </InsetInput>
      </div>
      <div className="w-full">
        <InsetInput type="tel" placeholder="e.g. +372 123 4567">
          <InsetInput.Label>Tel</InsetInput.Label>
        </InsetInput>
      </div>
      <div className="w-full">
        <InsetInput type="url" placeholder="e.g. https://domain.com">
          <InsetInput.Label>Url</InsetInput.Label>
        </InsetInput>
      </div>
    </div>
  </>
);

export default Example;
