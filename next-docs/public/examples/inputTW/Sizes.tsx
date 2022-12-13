import { Input, LabelInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <div>
      <LabelInput for="test-1" size="sm">
        Small (sm)
      </LabelInput>
      <Input type="text" inputSize="sm" placeholder="Placeholder" id="test-1" />
    </div>
    <div>
      <LabelInput for="test-2">Medium (Default: md)</LabelInput>
      <Input type="text" placeholder="Placeholder" id="test-2" />
    </div>
    <div>
      <LabelInput for="test-3">Large (lg)</LabelInput>
      <Input type="text" inputSize="lg" placeholder="Placeholder" id="test-3" />
    </div>
    <div>
      <LabelInput for="test-4">Xlarge (xl)</LabelInput>
      <Input type="text" inputSize="xl" id="test-4" placeholder="Placeholder" />
    </div>
  </div>
);

export default Example;
