import { Select } from '@heathmont/moon-core-tw';

const Example = () => {
  return (<div className="flex flex-col gap-y-3">
    <Select
      disabled={true}
      label='Disabled select'
      placeholder='Placeholder slot'
      options={[
        { value: 'one', element: 'One', label: 'One' },
        { value: 'two', element: 'Two', label: 'Two' },
        { value: 'three', element: 'Three', label: 'Three' },
      ]}
    />
  </div>);
};

export default Example;
