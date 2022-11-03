import { Select } from '@heathmont/moon-core-tw';

const options = [
  {
    value: 'Option 1',
    label: 'Option 1',
  },
  {
    value: 'Option 2',
    label: 'Option 2',
  },
  {
    value: 'Option 3',
    label: 'Option 3',
  },
];

const Example = () => (
  <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
    <Select
      options={options}
      size="sm"
      label="Small"
      placeholder="Choose an option"
    />
    <Select options={options} label="Medium" placeholder="Choose an option" />
    <Select
      options={options}
      label="Large"
      size="lg"
      placeholder="Choose an option"
    />
    <Select
      options={options}
      label="xLarge"
      size="xl"
      placeholder="Choose an option"
    />
  </div>
);

export default Example;
