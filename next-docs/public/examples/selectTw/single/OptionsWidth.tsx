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
    <div className="w-40">
      <Select
        options={options}
        size="sm"
        placeholder="Choose..."
        menuWidth="w-52"
      />
    </div>
    <div className="w-40">
      <Select options={options} placeholder="Choose..." menuWidth="w-52" />
    </div>
    <div className="w-64">
      <Select
        options={options}
        size="lg"
        placeholder="Choose..."
        menuWidth="w-40"
      />
    </div>
    <div className="w-64">
      <Select
        options={options}
        label="xLarge"
        size="xl"
        placeholder="Choose..."
        menuWidth="w-56"
      />
    </div>
  </div>
);

export default Example;
