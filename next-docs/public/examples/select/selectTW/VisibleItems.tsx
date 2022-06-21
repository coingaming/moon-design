import { Select } from '@heathmont/moon-core-tw';

const Example = () => {
  return (<div className="flex flex-col gap-y-3 mb-[150px] w-80">
    <Select
      value='one'
      label='Two items menu'
      placeholderSlot='Placeholder slot'
      amountOfVisibleItems={2}
      options={[
        { value: 'one', element: 'One', label: 'One' },
        { value: 'two', element: 'Two', label: 'Two' },
        { value: 'three', element: 'Three', label: 'Three' },
        { value: 'four', element: 'Four', label: 'four' },
      ]}
    />
  </div>);
};

export default Example;
