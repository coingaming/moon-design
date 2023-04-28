import React from 'react';
import { Accordion, Button } from '@heathmont/moon-core-tw';
import { ControlsChevronDown } from '@heathmont/moon-icons-tw';

const Example = () => {
  const items = ['item-1', 'item-2'];
  const [values, setValues] = React.useState(['item-1']);
  const toggleAll = () =>
    values.length === 0 ? setValues(items) : setValues([]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <Button className="w-32" onClick={toggleAll}>
        Toggle All
      </Button>
      <Accordion value={values} onValueChange={setValues}>
        <Accordion.Item value="item-1">
          <Accordion.Header className="moon-open:[&_svg]:rotate-180">
            <Accordion.Button>
              <span>Default</span>
              <ControlsChevronDown className="text-trunks text-moon-16 transition-transform duration-200" />
            </Accordion.Button>
          </Accordion.Header>
          <Accordion.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Header className="moon-open:[&_svg]:rotate-180">
            <Accordion.Button>
              <span>Test accordion</span>
              <ControlsChevronDown className="text-trunks text-moon-16 transition-transform duration-200" />
            </Accordion.Button>
          </Accordion.Header>
          <Accordion.Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Example;
