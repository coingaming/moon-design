import React from 'react';
import { AuthCode, Button, Form } from '@heathmont/moon-core-tw';
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

  const codeLength = 6;

  const customCodeValidate = (code: string) => {
    switch (code.length) {
      case 0:
        formReturn1.setError(
          'authCode1',
          {
            type: 'required',
            message: 'This field is required'
          });
        return false;
      case codeLength:
        formReturn1.setError('authCode1', {});
        return true;
      default:
        formReturn1.setError('authCode1',
          {
            type: 'minLength',
            message: 'The code is uncompleted'
          }
        );
        return false;
    }
  }

  const onSubmit1 = ({ authCode1 }: { authCode1: string }) => {
    if (customCodeValidate(authCode1))
      alert(`Code sent: "${authCode1}"`);
  };

  const onSubmit2 = ({ authCode2 }: { authCode2: string }) => {
    if (formReturn2.formState.isValid)
      alert(`Code sent: "${authCode2}"`)
  };

  return (
    <div className='flex flex-col justify-start items-center lg:flex-row lg:justify-around lg:items-start gap-y-8 w-full'>
      <Form onSubmit={formReturn1.handleSubmit(onSubmit1)} className='flex flex-col justify-between items-end gap-y-2'>
        <Controller
          name='authCode1'
          control={formReturn1.control}
          render={({ field }) => <AuthCode
            {...field}
            length={codeLength}
            errorMessage={formReturn1.formState.errors.authCode1?.message}
          />}
        />
        <Button as='button' type='submit' size='md'>Send code</Button>
      </Form>

      <Form onSubmit={formReturn2.handleSubmit(onSubmit2)} className='flex flex-col justify-between items-end gap-y-2'>
        <Controller
          name='authCode2'
          control={formReturn2.control}
          rules={{
            validate: {
              filled: v => v.length !== 0,
              complete: v => v.length === codeLength
            }
          }}
          render={({ field }) => <AuthCode
            {...field}
            length={codeLength}
            onChange={(value: string) => { field.onChange(value) }}
            errorMessage={formReturn2.formState.errors.authCode2?.message}
          />}
        />
        <Button as='button' type='submit' size='md' disabled={!formReturn2.formState.isValid}>Send code</Button>
      </Form>
    </div>
  );
}

export default Example;
