import React from 'react';
import { AuthCode, Form } from '@heathmont/moon-core-tw';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  authCode: z.string().length(6, { message: 'Must be exactly 6 characters long' }),
});

type ValidationSchema = z.infer<typeof schema>;

const Example = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      authCode: '',
    },
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<ValidationSchema> = ({ authCode }) => {
    if (authCode.length === 6) {
      alert(`Code sent: "${authCode}"`);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
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
          />}
      />
    </Form>
  );
};

export default Example;
