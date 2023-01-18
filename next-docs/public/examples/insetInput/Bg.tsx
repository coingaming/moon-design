import { InsetInput, Hint } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <InsetInput
        placeholder="Placeholder"
        className="bg-beerus [&_input]:text-piccolo"
      >
        <InsetInput.Label className="text-piccolo">Label</InsetInput.Label>
      </InsetInput>
      <Hint className="text-piccolo">Informative message holder</Hint>
    </div>
  </div>
);

export default Example;
