import React from 'react';
import { AuthCode, Form } from '@heathmont/moon-core-tw';
import { Controller, useForm } from 'react-hook-form';

const Example = () => {
  const formReturn1 = useForm({
    defaultValues: {
      authCode1: '',
    }
  });

  const formReturn2 = useForm({
    defaultValues: {
      authCode2: '',
    }
  });

  const codeLength1 = 6;
  const codeLength2 = 4;

  const onSubmit1 = ({ authCode1 }: { authCode1: string }) => {
    if (formReturn1.formState.isValid)
      alert(`Code sent: "${authCode1}"`)
  };

  const onSubmit2 = ({ authCode2 }: { authCode2: string }) => {
    if (formReturn2.formState.isValid)
      alert(`Code sent: "${authCode2}"`)
  };

  return (
    <div className='flex flex-col items-stretch justify-between w-full gap-y-8'>
      <Form onSubmit={formReturn1.handleSubmit(onSubmit1)} className='flex flex-col justify-between items-stretch w-full gap-y-2'>
      <Controller
        name='authCode1'
        control={formReturn1.control}
        rules={{ required: true, minLength: codeLength1 - 1 }}
        render={({ field }) => <AuthCode
            {...field}
            length={codeLength1}
            stretch={true}
            onChange={(value: string) => { onSubmit1({ authCode1: value }); field.onChange(value) }}
            disabled={field.value.length === codeLength1}
          />}
      />
    </Form>

    <Form onSubmit={formReturn2.handleSubmit(onSubmit2)} className='flex flex-col justify-between items-stretch w-fool gap-y-2'>
      <Controller
        name='authCode2'
        control={formReturn2.control}
        rules={{ required: true, minLength: codeLength2 - 1 }}
        render={({ field }) => <AuthCode
            {...field}
            length={codeLength2}
            stretch={true}
            expandable={true}
            onChange={(value: string) => { onSubmit2({ authCode2: value }); field.onChange(value) }}
            disabled={field.value.length === codeLength2}
          />}
      />
    </Form>
  </div>
  );
};

export default Example;
