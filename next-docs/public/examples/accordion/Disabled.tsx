import { Accordion } from '@heathmont/moon-core-tw';
import { ControlsChevronDown } from '@heathmont/moon-icons-tw';

const Example = () => (
  <Accordion>
    <Accordion.Item disabled value="item-1">
      <Accordion.Header className="moon-open:[&_svg]:rotate-180" disabled>
        <Accordion.Button>
          <span>Test accordion</span>
          <ControlsChevronDown className="text-trunks text-moon-16 transition-transform duration-200" />
        </Accordion.Button>
      </Accordion.Header>
      <Accordion.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

export default Example;
