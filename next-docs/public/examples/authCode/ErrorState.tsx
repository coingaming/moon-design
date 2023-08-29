import React, { useEffect } from 'react';
import { AuthCode, Form, Hint } from '@heathmont/moon-core-tw';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  authCode: z.string().min(3, { message: 'Must be 3 or more characters long' }),
});

type ValidationSchema = z.infer<typeof schema>;

const Example = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    trigger,
  } = useForm({
    defaultValues: {
      authCode: '',
    },
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<ValidationSchema> = (data: ValidationSchema) =>
    console.log('onSubmit: ', data);
  // Trigger validation for this example
  useEffect(() => {
    trigger('authCode');
  }, []);
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center flex-col"
    >
      <Controller
        name="authCode"
        control={control}
        render={({ field }) => (
          <>
            <AuthCode {...field} isValid={isValid} />
            {!isValid && (
              <Hint error className="!ps-0">
                {errors.authCode?.message}
              </Hint>
            )}
          </>
        )}
      />
    </Form>
  );
};

export default Example;
