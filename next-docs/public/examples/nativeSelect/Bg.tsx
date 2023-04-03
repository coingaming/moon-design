import { NativeSelect, Label, Hint } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <Label htmlFor="c-1" className="text-piccolo">
        Medium (Default: md)
      </Label>
      <NativeSelect
        placeholder="Placeholder"
        id="c-1"
        className="[&_select]:bg-beerus [&_select]:text-piccolo [&_svg]:text-piccolo"
      >
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelect>
      <Hint className="text-piccolo">Informative message holder</Hint>
    </div>
  </div>
);

export default Example;
