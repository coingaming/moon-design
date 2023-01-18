import { InsetInput, Hint } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <InsetInput placeholder="Placeholder" disabled>
        <InsetInput.Label>Label</InsetInput.Label>
      </InsetInput>
      <Hint disabled>Informative message holder</Hint>
    </div>
    <div className="w-full">
      <InsetInput placeholder="Placeholder" error>
        <InsetInput.Label>Label</InsetInput.Label>
      </InsetInput>
      <Hint error>Error message</Hint>
    </div>
    <div className="w-full">
      <InsetInput placeholder="Placeholder" readOnly value="Read only text">
        <InsetInput.Label>Label</InsetInput.Label>
      </InsetInput>
      <Hint>Informative message holder</Hint>
    </div>
  </div>
);

export default Example;
