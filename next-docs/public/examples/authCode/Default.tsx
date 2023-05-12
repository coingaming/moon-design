import React from 'react';
import { AuthCode, Form } from '@heathmont/moon-core-tw';
import { Controller, useForm } from 'react-hook-form';

const Example = () => {
  const { control, handleSubmit, setError, formState: { isValid } } = useForm({
    defaultValues: {
      authCode: '',
    }
  });

  const onSubmit = ({ authCode }: { authCode: string }) => {
    if (isValid)
      alert(`Code sent: "${authCode}"`);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between items-end gap-y-2'>
      <Controller
        name='authCode'
        control={control}
        rules={{ required: true, minLength: 5 }}
        render={({ field }) => <AuthCode
            {...field}
            onChange={(value: string) => { onSubmit({ authCode: value }); field.onChange(value) }}
            disabled={field.value.length === 6}
          />}
      />
    </Form>
  );
}

export default Example;
