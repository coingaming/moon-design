import React from 'react';
import { Form, Label, Hint, Input, Textarea } from '@heathmont/moon-core-tw';

const Example = () => (
  <Form size="lg" className="p-5">
    <div className="flex gap-4 justify-between pb-2">
      <Form.Item>
        <Label for="name">First name</Label>
        <Input placeholder="Your first name..." id="name" />
        <Hint>Informative message holder</Hint>
      </Form.Item>
      <Form.Item>
        <Label for="lastName">Last name</Label>
        <Input placeholder="Your last name..." id="lastName" />
        <Hint>Informative message holder</Hint>
      </Form.Item>
    </div>
    <Form.Item>
      <Label for="info">Additional information</Label>
      <Textarea placeholder="Add additional information..." id="info" />
      <Hint>Informative message holder</Hint>
    </Form.Item>
  </Form>
);

export default Example;
