import { Accordion } from '@heathmont/moon-core-tw';
import { ControlsChevronDown } from '@heathmont/moon-icons-tw';

const Example = () => (
  <Accordion>
      <Accordion.Item value="item-3">
        <Accordion.Header className="border-b">
          <Accordion.Button className="moon-open:[&_svg]:rotate-180">
            <span>Test accordion</span>
            <ControlsChevronDown
              className="text-trunks text-moon-16 transition-transform duration-200"
            />
          </Accordion.Button>
        </Accordion.Header>
        <Accordion.Content className="pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
);

export default Example;
