import { TextInputGroup } from '@heathmont/moon-core-tw';

const Default = () => {
  const inputProps1 = {
    type: 'text',
    inputSize: 'medium',
    placeholder: 'Country',
  };

  const inputProps2 = {
    type: 'text',
    inputSize: 'medium',
    placeholder: 'Phone',
  };
  return (
    <>
      <section className="mt-8 text-3xl font-bold">Default</section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-end w-full gap-2">
          <TextInputGroup
            inputProps={{
              input1: inputProps1,
              input2: inputProps2,
            }}
          />
        </div>
      </div>
    </>
  );
};

const Vertical = () => {
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
    inputSize: 'xl',
    label: 'label 1',
    placeholder: 'Country',
  };

  const inputProps4 = {
    type: 'text',
    inputSize: 'xl',
    label: 'label 2',
    placeholder: 'Phone',
  };

  return (
    <>
      <section className="mt-8 text-3xl font-bold">
        Vertical orientation
      </section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-end w-full gap-2">
          <TextInputGroup
            orientation="vertical"
            inputProps={{
              input1: inputProps1,
              input2: inputProps2,
            }}
          />
          <TextInputGroup
            orientation="vertical"
            inputProps={{
              input1: inputProps3,
              input2: inputProps4,
            }}
          />
        </div>
      </div>
    </>
  );
};

const Rtl = () => {
  const inputProps1 = {
    type: 'text',
    inputSize: 'medium',
    placeholder: 'Country',
  };

  const inputProps2 = {
    type: 'text',
    inputSize: 'medium',
    placeholder: 'Phone',
  };

  return (
    <>
      <section className="mt-8 text-3xl font-bold">RTL</section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-end w-full gap-2">
          <TextInputGroup
            inputProps={{
              input1: inputProps1,
              input2: inputProps2,
            }}
            isRtl
          />
        </div>
      </div>
    </>
  );
};

const Sizes = () => {
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
    <>
      <section className="mt-8 text-3xl font-bold">Sizes</section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-end w-full gap-2">
          <div>
            <TextInputGroup
              inputProps={{
                input1: inputProps1,
                input2: inputProps2,
              }}
            />
          </div>
          <div>
            <TextInputGroup
              inputProps={{
                input1: inputProps3,
                input2: inputProps4,
              }}
            />
          </div>
          <div>
            <TextInputGroup
              inputProps={{
                input1: inputProps5,
                input2: inputProps6,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Error = () => {
  const inputProps1 = {
    type: 'text',
    inputSize: 'medium',
    placeholder: 'Username',
    isError: true,
  };

  const inputProps2 = {
    type: 'email',
    inputSize: 'medium',
    placeholder: 'Email',
  };
  return (
    <>
      <section className="mt-8 text-3xl font-bold">Error</section>
      <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
        <div className="flex justify-around items-end w-full gap-2">
          <TextInputGroup
            inputProps={{
              input1: inputProps1,
              input2: inputProps2,
            }}
          />
          <TextInputGroup
            orientation="vertical"
            inputProps={{
              input1: inputProps1,
              input2: inputProps2,
            }}
          />
        </div>
      </div>
    </>
  );
};

const Example = () => (
  <div className="theme-moon-dark">
    <Default />
    <Vertical />
    <Rtl />
    <Sizes />
    <Error />
  </div>
);

export default Example;
