import { Select } from '@heathmont/moon-core-tw';
import { ChartPieChart } from '@heathmont/moon-icons';

const Example = () => {
  return (<div className="flex flex-col gap-y-3 mb-[150px]">
    <Select
      value='one'
      label='Left slot'
      placeholder='Placeholder slot'
      left={(<ChartPieChart fontSize='1.5rem'/>)}
      options={[
        { value: 'one', element: 'One', label: 'One' },
        { value: 'two', element: 'Two', label: 'Two' },
        { value: 'three', element: 'Three', label: 'Three' },
        { value: 'four', element: 'Four', label: 'four' },
      ]}
    />

    <div className='mt-4'>
      <Select
        value='one'
        label='Left slot'
        placeholder='Placeholder slot'
        size='xl'
        left={(<ChartPieChart fontSize='1.8rem'/>)}
        options={[
          { value: 'one', element: 'One', label: 'One' },
          { value: 'two', element: 'Two', label: 'Two' },
          { value: 'three', element: 'Three', label: 'Three' },
          { value: 'four', element: 'Four', label: 'four' },
        ]}
      />
    </div>
  </div>);
};

export default Example;
