import React from 'react';
import { AuthCode, Form } from '@heathmont/moon-core-tw';
import { Controller, useForm } from 'react-hook-form';

const Example = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      authCode: '',
    }
  });

  const onSubmit = ({ authCode }: { authCode: string }) => {
    if (authCode.length === 6) {
      alert(`Code sent: "${authCode}"`);
    }
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
            onChange={
              (value: string) => {
                field.onChange(value);
                onSubmit({ authCode: value });
              }}
            disabled={field.value.length === 6}
          />
        }
      />
    </Form>
  );
}

export default Example;
