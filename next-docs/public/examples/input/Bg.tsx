import { Input, Label, Hint } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <Label for="c-1" className="text-piccolo">
        Medium (Default: md)
      </Label>
      <Input
        type="text"
        placeholder="Placeholder"
        id="c-1"
        className="bg-beerus text-piccolo"
      />
      <Hint className="text-piccolo">Informative message holder</Hint>
    </div>
  </div>
);

export default Example;
