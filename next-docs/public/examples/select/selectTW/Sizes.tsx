import { Select } from '@heathmont/moon-core-tw';

const Example = () => {
  return (<div className="flex flex-col gap-y-3 mb-[150px]">
    <Select
      value='one'
      label='Medium (default)'
      options={[
        { value: 'one', element: 'One', label: 'One' },
        { value: 'two', element: 'Two', label: 'Two' },
        { value: 'three', element: 'Three', label: 'Three' },
      ]}
    />

    <div className='mt-4'>
      <Select
        value='one'
        label='Large'
        size='lg'
        options={[
          { value: 'one', element: 'One', label: 'One' },
          { value: 'two', element: 'Two', label: 'Two' },
          { value: 'three', element: 'Three', label: 'Three' },
        ]}
      />
    </div>
  </div>);
};

export default Example;
