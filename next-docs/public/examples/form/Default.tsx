import React, { useState } from 'react';
import { Form, Label, Hint, Input } from '@heathmont/moon-core-tw';

const Example = () => {
  return (
    <Form size="lg" className="p-5">
      <div className="flex gap-4 justify-between ">
        <Form.Item error>
          <Label for="test-1" className="text-piccolo">
            Label
          </Label>
          <Input
            placeholder="tkgmrtkhmrt"
            id="test-1"
            className="rounded-none"
          />
          <Hint error>Informative message holder</Hint>
        </Form.Item>
        <Form.Item>
          <Label>Label</Label>
          <Input placeholder="tkgmrtkhmrt" />
          <Hint>Informative message holder</Hint>
        </Form.Item>
      </div>
      <div className="flex gap-4 justify-between">
        <Form.Item>
          <Label for="test-1" className="text-piccolo">
            Label
          </Label>
          <Input
            placeholder="tkgmrtkhmrt"
            id="test-1"
            className="rounded-none"
          />
          <Hint error>Informative message holder</Hint>
        </Form.Item>
        <Form.Item>
          <Label>Label</Label>
          <Input placeholder="tkgmrtkhmrt" />
          <Hint>Informative message holder</Hint>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Example;
