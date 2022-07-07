import { Select } from '@heathmont/moon-core-tw';

const Example = () => {
  return (<div className="flex flex-col gap-y-3 mb-[150px]">
    <Select
      isError={true}
      value='one'
      label='Error input'
      placeholder='Placeholder slot'
      options={[
        { value: 'one', element: 'One', label: 'One' },
        { value: 'two', element: 'Two', label: 'Two' },
        { value: 'three', element: 'Three', label: 'Three' },
      ]}
    />

    <div className='mt-4'>
      <Select
        isError={true}
        value='one'
        label='Error with hint'
        placeholder='Placeholder slot'
        hint="Informative message holder"
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
