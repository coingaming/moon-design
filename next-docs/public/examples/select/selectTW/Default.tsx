import { Select } from '@heathmont/moon-core-tw';

const Example = () => (
  <div className="flex flex-col gap-y-3">
    <Select
      value='one'
      label='Default select'
      placeholderSlot='Placeholder slot'
      options={[
        { value: 'one', element: 'One' },
        { value: 'two', element: 'Two' },
        { value: 'three', element: 'Three' },
      ]}
    />
  </div>
);

export default Example;
