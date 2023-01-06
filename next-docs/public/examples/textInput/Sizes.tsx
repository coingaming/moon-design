import { TextInput } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <TextInput
      type="text"
      inputSize="sm"
      label="Small (sm)"
      placeholder="Placeholder"
    />
    <TextInput
      type="text"
      label="Medium (Default: md)"
      placeholder="Placeholder"
    />
    <TextInput
      type="text"
      inputSize="lg"
      label="Large (lg)"
      placeholder="Placeholder"
    />
    <TextInput
      type="text"
      inputSize="xl"
      label="Xlarge (xl)"
      placeholder="Placeholder"
    />
  </div>
);

export default Example;
