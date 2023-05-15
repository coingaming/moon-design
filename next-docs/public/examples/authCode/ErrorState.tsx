import React from 'react';
import { AuthCode, Form } from '@heathmont/moon-core-tw';
import { Controller, useForm } from 'react-hook-form';

const Example = () => {
  const { control, handleSubmit, formState: { isValid } } = useForm({
    defaultValues: {
      authCode: '',
    }
  });

  const onSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between items-end gap-y-2'>
      <Controller
        name='authCode'
        control={control}
        rules={{ pattern: /[-]+/ }}
        render={({ field }) => <AuthCode
            {...field}
            errorMessage={(!isValid && "Provided value is not valid!") as string}
          />}
      />
    </Form>
  );
};

export default Example;
