import React from 'react';
import { AuthCode, Form } from '@heathmont/moon-core-tw';
import { Controller, useForm } from 'react-hook-form';

const Example = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      authCode: '',
    }
  });

  const codeLength = 4;

  const onSubmit = ({ authCode }: { authCode: string }) => {
    if (authCode.length === codeLength)
      alert(`Code sent: "${authCode}"`);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col justify-between items-end gap-y-2'
    >
      <Controller
        name='authCode'
        control={control}
        render={({ field }) =>
          <AuthCode
            {...field}
            length={codeLength}
            onChange={(value: string) => {
              onSubmit({ authCode: value });
              field.onChange(value);
            }}
            disabled={field.value.length === codeLength}
          />}
      />
    </Form>
  );
}

export default Example;
