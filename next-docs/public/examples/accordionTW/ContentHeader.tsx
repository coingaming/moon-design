import { Accordion } from '@heathmont/moon-core-tw';
import {
  ChatChat,
  ChatComment,
  ChatCommentAdd,
  ChatDoubleBubble,
} from '@heathmont/moon-icons-tw';

const Example = () => (
  <Accordion
    title="Test accordion"
    headerContent={
      <div className="flex text-moon-24 text-trunks">
        <ChatChat />
        <ChatComment />
        <ChatCommentAdd />
        <ChatDoubleBubble />
      </div>
    }
  >
    <div className="text-moon-14">
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
