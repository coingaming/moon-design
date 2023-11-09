import React from 'react';
import {
  Form,
  Hint,
  InsetInput,
  Textarea,
  Button,
} from '@heathmont/moon-core-tw';
import { GenericInfo } from '@heathmont/moon-icons-tw';

const Example = () => {
  return (
    <Form
      className="w-96 p-5 flex flex-col gap-4"
      method="get"
      id="login"
      onSubmit={() => console.log('Submit')}
    >
      <Form.Item error>
        <InsetInput
          placeholder="Your username..."
          className="rounded-moon-s-xs [&_input]:rounded-moon-s-xs [&_input:focus]:rounded-moon-s-xs  [&_input:hover]:rounded-moon-s-xs"
        >
          <InsetInput.Label>Username</InsetInput.Label>
        </InsetInput>
        <Hint error>
          <GenericInfo />
          Informative message holder
        </Hint>
      </Form.Item>
      <Form.Item>
        <InsetInput
          placeholder="Your Email..."
          className="rounded-moon-s-xs [&_input]:rounded-moon-s-xs [&_input:focus]:rounded-moon-s-xs [&_input:hover]:rounded-moon-s-xs"
        >
          <InsetInput.Label>Email</InsetInput.Label>
        </InsetInput>
      </Form.Item>
      <Form.Item>
        <InsetInput placeholder="Your password...">
          <InsetInput.Label>Password</InsetInput.Label>
        </InsetInput>
      </Form.Item>
      <Form.Item>
        <InsetInput placeholder="Repeat password...">
          <InsetInput.Label>Password</InsetInput.Label>
        </InsetInput>
      </Form.Item>
      <Form.Item>
        <Textarea placeholder="Additional information..." />
      </Form.Item>
      <Button type="submit" form="login" value="Submit">
        Create account
      </Button>
    </Form>
  );
};

export default Example;
