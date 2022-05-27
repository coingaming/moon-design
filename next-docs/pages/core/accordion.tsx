import { Accordion } from '@heathmont/moon-core-tw';
import {
  ChatChat,
  ChatComment,
  ChatCommentAdd,
  ChatDoubleBubble,
} from '@heathmont/moon-icons';

const Example = () => (
  <div>
    <section className="mt-8 text-3xl font-bold">Default</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Accordion title="Accordion title">
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
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Open by default</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Accordion title="Accordion title" openByDefault>
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
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Without button</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Accordion title="Accordion title" withButton={false}>
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
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Disable open</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Accordion title="Accordion title" disableOpen>
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
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Content outside</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Accordion title="Accordion title" isContentInside={false}>
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
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Header content</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Accordion title="Accordion title" isContentInside={false}>
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
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Header content</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex justify-around items-center w-full">
        <Accordion
          title="Accordion title"
          headerContent={
            <div className="flex gap-1 text-trunks">
              <ChatChat fontSize="1.5rem" />
              <ChatComment fontSize="1.5rem" />
              <ChatCommentAdd fontSize="1.5rem" />
              <ChatDoubleBubble fontSize="1.5rem" />
            </div>
          }
        >
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
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">Sizes</section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex flex-col gap-y-3">
        <Accordion title="XL Accordion title" size="xl">
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

        <Accordion title="LG Accordion title" size="lg">
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

        <Accordion title="MD Accordion title (default size)">
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

        <Accordion title="SM Accordion title" size="sm">
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
      </div>
    </div>

    <section className="mt-8 text-3xl font-bold">
      Sizes: content outside
    </section>
    <div className="flex justify-around items-center w-full bg-slate-200 p-4 my-4 rounded">
      <div className="flex flex-col gap-y-3">
        <Accordion title="XL Accordion title" size="xl" isContentInside={false}>
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

        <Accordion title="LG Accordion title" size="lg" isContentInside={false}>
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

        <Accordion
          title="MD Accordion title (default size)"
          isContentInside={false}
        >
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

        <Accordion title="SM Accordion title" size="sm" isContentInside={false}>
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
      </div>
    </div>
  </div>
);

export default Example;
