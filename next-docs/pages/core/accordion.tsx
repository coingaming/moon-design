import { Accordion } from '@heathmont/moon-core-tw';
import {
  ChatChat,
  ChatComment,
  ChatCommentAdd,
  ChatDoubleBubble,
} from '@heathmont/moon-icons';

const Example = () => (
  <div className="theme-moon-dark">
    <section className="mt-8 text-3xl font-bold">Default</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Accordion title="Test accordion">
          <div className="text-moon-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Open by default</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Accordion title="Test accordion" openByDefault={true}>
          <div className="text-moon-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Without button</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Accordion title="Test accordion" withButton={false}>
          <div className="text-moon-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Disable open</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Accordion title="Test accordion" disableOpen={true}>
          <div className="text-moon-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Content outside</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Accordion title="Test accordion" isContentInside={false}>
          <div className="text-moon-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Header content</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Accordion title="Test accordion" isContentInside={false}>
          <div className="text-moon-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Header content</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Accordion
          title="Test accordion"
          headerContent={
            <div className="flex">
              <ChatChat fontSize="2rem" />
              <ChatComment fontSize="2rem" />
              <ChatCommentAdd fontSize="2rem" />
              <ChatDoubleBubble fontSize="2rem" />
            </div>
          }
        >
          <div className="text-moon-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Sizes</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex flex-col gap-y-3">
        <Accordion title="X Large (Default)" size="xl">
          <div className="text-moon-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>

        <Accordion title="Large (lg)" size="lg">
          <div className="text-moon-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>

        <Accordion title="Medium (md Default)" size="md">
          <div className="text-moon-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>

        <Accordion title="Small (sm)" size="sm">
          <div className="text-moon-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">
      Sizes: content outside
    </section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex flex-col gap-y-3">
        <Accordion title="X Large (xl)" size="xl" isContentInside={false}>
          <div className="text-moon-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>

        <Accordion title="Large (lg)" size="lg" isContentInside={false}>
          <div className="text-moon-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>

        <Accordion
          title="Medium (md Default)"
          size="md"
          isContentInside={false}
        >
          <div className="text-moon-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>

        <Accordion title="Small (sm)" size="sm" isContentInside={false}>
          <div className="text-moon-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Accordion>
      </div>
    </div>
  </div>
);

export default Example;
