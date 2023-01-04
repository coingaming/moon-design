import { TextInputGroup } from '@heathmont/moon-core-tw';

const Example = () => {
  const inputProps1 = {
    type: 'text',
    inputSize: 'md',
    placeholder: 'Country',
  };

  const inputProps2 = {
    type: 'text',
    inputSize: 'md',
    placeholder: 'Phone',
  };

  const inputProps3 = {
    type: 'text',
    inputSize: 'lg',
    placeholder: 'Country',
  };

  const inputProps4 = {
    type: 'text',
    inputSize: 'lg',
    placeholder: 'Phone',
  };

  const inputProps5 = {
    type: 'text',
    inputSize: 'xl',
    placeholder: 'Country',
  };

  const inputProps6 = {
    type: 'text',
    inputSize: 'xl',
    placeholder: 'Phone',
  };
  return (
    <div className="flex flex-col lg:flex-row justify-around items-end w-full gap-2">
      <TextInputGroup
        inputProps={{
          input1: inputProps1,
          input2: inputProps2,
        }}
      />
      <TextInputGroup
        inputProps={{
          input1: inputProps3,
          input2: inputProps4,
        }}
      />
      <TextInputGroup
        inputProps={{
          input1: inputProps5,
          input2: inputProps6,
        }}
      />
    </div>
  );
};

export default Example;
