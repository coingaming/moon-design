import React from 'react';
import { AuthCode, Button, Form } from '@heathmont/moon-core-tw';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  authCode: z.string().length(6, { message: 'Must be exactly 6 characters long' }),
});

type ValidationSchema = z.infer<typeof schema>;

const Example = () => {
  const { control, handleSubmit, formState: { isValid, isDirty } } = useForm({
    defaultValues: {
      authCode: '',
    },
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<ValidationSchema> =
    (data: ValidationSchema) => alert(data.authCode);

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-2'
    >
      <Controller
        name='authCode'
        control={control}
        render={({ field }) => <AuthCode {...field} />}
      />
      <Button as='button' type='submit' disabled={!isDirty || !isValid}>
        Send code
      </Button>
    </Form>
  );
};

export default Example;
