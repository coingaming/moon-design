import React from 'react';
import { AuthCode, Form } from '@heathmont/moon-core-tw';
import { Controller, useForm } from 'react-hook-form';

const Example = () => {
  const { control, handleSubmit, setError, formState: { isValid } } = useForm({
    defaultValues: {
      authCode: '',
    }
  });

  const codeLength = 5;

  const onSubmit = ({ authCode }: { authCode: string }) => {
    if (authCode.length === codeLength)
      alert(`Code sent: "${authCode}"`);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between items-end gap-y-2'>
      <Controller
        name='authCode'
        control={control}
        rules={{ required: true, minLength: codeLength - 1 }}
        render={({ field }) => <AuthCode
            {...field}
            length={codeLength}
            allowedCharacters={'numeric'}
            onChange={(value: string) => { onSubmit({ authCode: value }); field.onChange(value) }}
            disabled={field.value.length === codeLength}
          />}
      />
    </Form>
  );
};

export default Example;
