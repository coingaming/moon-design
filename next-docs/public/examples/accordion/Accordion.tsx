import { Accordion } from '@heathmont/moon-accordion';

const Example = () => (
  <Accordion
    title="Test"
    headerContent={
      <div onClick={() => console.log('Clicked')}>Additional content</div>
    }
    openByDefault={false}
    withArrow={true}
    disableOpen={false}
  >
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  </Accordion>
);

export default Example;
