import React from 'react';
import { AuthCode, Button, Form } from '@heathmont/moon-core-tw';
import { Controller, useForm } from 'react-hook-form';

const Example = () => {
  const { control, handleSubmit, setError, formState: { errors } } = useForm({
    defaultValues: {
      authCode: '',
    }
  });

  const onSubmit = ({ authCode }: { authCode: string }) => {
    alert(`Code sent: "${authCode}"`)
  };
/*
  React.useEffect(() => {
    setError("authCode", {
      types: {
        required: "This is a required field",
        minLength: "Data length is less than required"
      }
    });
  }, [setError]);
*/
  return (
    <Form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-between items-end gap-y-2'>
      <Controller
        name='authCode'
        control={control}
        rules={{ minLength: 6, required: true }}
        render={({ field }) => <AuthCode
            {...field}
            errorMessage={errors.authCode?.message}
          />}
        />
      <Button as='button' type='submit' size='md'>Send code</Button>
    </Form>
  );
}

export default Example;
