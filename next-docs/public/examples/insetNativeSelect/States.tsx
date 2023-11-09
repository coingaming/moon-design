import { InsetNativeSelect, Hint } from '@heathmont/moon-core-tw';
import { GenericInfo } from '@heathmont/moon-icons-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div className="w-full">
      <InsetNativeSelect label="Disabled" id="dis-1" disabled>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </InsetNativeSelect>
      <Hint disabled>Informative message holder</Hint>
    </div>
    <div className="w-full">
      <InsetNativeSelect label="Error" id="err-1" error>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </InsetNativeSelect>
      <Hint error>
        <GenericInfo />
        Informative message holder
      </Hint>
    </div>
    <div className="w-full">
      <InsetNativeSelect label="Read only" id="ro-1" readOnly>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </InsetNativeSelect>
      <Hint>Informative message holder</Hint>
    </div>
  </div>
);

export default Example;
