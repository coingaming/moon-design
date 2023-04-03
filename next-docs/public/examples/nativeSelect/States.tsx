import { NativeSelect, Label, Hint } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <Label htmlFor="dis-1" disabled>
        Disabled
      </Label>
      <NativeSelect id="dis-1" disabled>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
      <Hint disabled>Informative message holder</Hint>
    </div>
    <div className="w-full">
      <Label htmlFor="err-1">Error</Label>
      <NativeSelect id="err-1" error>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
      <Hint error>Error message</Hint>
    </div>
    <div className="w-full">
      <Label htmlFor="ro-1">Read only text</Label>
      <NativeSelect id="ro-1" readOnly>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
      <Hint>Informative message holder</Hint>
    </div>
  </div>
);

export default Example;
