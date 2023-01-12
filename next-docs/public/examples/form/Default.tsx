import React, { useState } from 'react';
import {
  Form,
  Label,
  Hint,
  Input,
  Textarea,
  Dropdown,
  MenuItem,
  Button,
} from '@heathmont/moon-core-tw';

const options = [
  { name: '01' },
  { name: '02' },
  { name: '03' },
  { name: '04' },
  { name: '05' },
  { name: '06' },
];

const Example = () => {
  return (
    <Form
      size="lg"
      className="w-96 p-5 flex flex-col gap-4"
      method="get"
      id="login"
      onSubmit={() => console.log('Submit')}
    >
      <Form.Item error>
        <Label htmlFor="name">Username</Label>
        <Input placeholder="Your username..." id="name" />
        <Hint>Field is required</Hint>
      </Form.Item>
      <Form.Item>
        <Label htmlFor="email">Email</Label>
        <Input placeholder="Your Email..." id="email" />
      </Form.Item>
      <Form.Item className="grid gap-2 grid-cols-3 z-10">
        <DataSelect options={options} label="Day" />
        <DataSelect options={options} label="Month" />
        <DataSelect options={options} label="Year" />
      </Form.Item>
      <Form.Item>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </Form.Item>
      <Form.Item>
        <Label htmlFor="info">Additional information</Label>
        <Textarea id="info" />
      </Form.Item>
      <Button type="submit" form="login" value="Submit">
        Create account
      </Button>
    </Form>
  );
};

type OptionRenderProps = {
  selected: boolean;
  active: boolean;
};
const DataSelect: React.FC<{ options: any; label: string }> = ({
  options,
  label,
}) => {
  const [option, setOption] = useState(null);
  return (
    <>
      <Dropdown value={option} onChange={setOption}>
        {({ open }: { open: boolean }) => (
          <>
            <Dropdown.Select open={open} label={label}>
              {option?.name}
            </Dropdown.Select>
            <Dropdown.Options>
              {options.map((opt: any) => (
                <Dropdown.Option value={opt} key={opt}>
                  {({ selected, active }: OptionRenderProps) => (
                    <MenuItem isActive={active} isSelected={selected}>
                      {opt.name}
                    </MenuItem>
                  )}
                </Dropdown.Option>
              ))}
            </Dropdown.Options>
          </>
        )}
      </Dropdown>
    </>
  );
};
export default Example;
