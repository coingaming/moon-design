import React from 'react';
import { Accordion, Tabs } from '@heathmont/moon-base-tw';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons-tw';
import Link from 'next/link';

const ServerDoc: React.FC = () => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  return (
    <div className="flex flex-col p-5 gap-6 w-full">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Tabs>
        <Tabs.List>
          {/* <a href="#tab1">
            <Tabs.Tab>Tab 1</Tabs.Tab>
          </a>
          <a href="#tab2">
            <Tabs.Tab>Tab 2</Tabs.Tab>
          </a>
          <a href="#tab3">
            <Tabs.Tab>Tab 3</Tabs.Tab>
          </a> */}

          <Tabs.Tab href="#tab1">Tab 1</Tabs.Tab>
          <Tabs.Tab href="#tab2">Tab 2</Tabs.Tab>
          <Tabs.Tab href="#tab3">Tab 3</Tabs.Tab>
          {/* <Link href="/serverdoc#tab1" scroll={false} legacyBehavior>
            <Tabs.Tab>Tab 1</Tabs.Tab>
          </Link>
          <Link href="/serverdoc#tab2" scroll={false} legacyBehavior>
            <Tabs.Tab>Tab 2</Tabs.Tab>
          </Link>
          <Link href="/serverdoc#tab3" scroll={false} legacyBehavior>
            <Tabs.Tab>Tab 3</Tabs.Tab>
          </Link> */}
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel id="tab1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Tabs.Panel>
          <Tabs.Panel id="tab2">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Tabs.Panel>
          <Tabs.Panel id="tab3">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
      {/* <PokemonTable pokemons={store.getState().search.startupPokemon} />
    <div className="w-72 pb-6 flex gap-3">
      <InputPure placeholder="frrrr" size="sm" />
      <NativeSelectPure size="sm">
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
        <option value="China">China</option>
        <option value="Germany">Germany</option>
      </NativeSelectPure>
      <CheckboxPure
        defaultChecked={false}
        label="Label"
        className="peer-checked:bg-krillin"
        indeterminate
      />
      <Avatar />
      <CircularProgress value={75} size="sm" />
      <Progress value={75} size="5xs" />
    </div> */}
      {/* <div className="flex flex-wrap items-center justify-around p-4 gap-2 w-full bg-goku text-moon-14 rounded-moon-s-sm "> */}
      {/* <Table size="xs">
          <Table.Head>
            <Table.Row>
              <Table.Header>Company</Table.Header>
              <Table.Header>Contact</Table.Header>
              <Table.Header>Country</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Alfreds Futterkiste</Table.Cell>
              <Table.Cell>Maria Anders</Table.Cell>
              <Table.Cell>Germany</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Centro comercial Moctezuma</Table.Cell>
              <Table.Cell>Francisco Chang</Table.Cell>
              <Table.Cell>Mexico</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Table size="sm">
          <Table.Head>
            <Table.Row>
              <Table.Header>Company</Table.Header>
              <Table.Header>Contact</Table.Header>
              <Table.Header>Country</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Alfreds Futterkiste</Table.Cell>
              <Table.Cell>Maria Anders</Table.Cell>
              <Table.Cell>Germany</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Centro comercial Moctezuma</Table.Cell>
              <Table.Cell>Francisco Chang</Table.Cell>
              <Table.Cell>Mexico</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Header>Company</Table.Header>
              <Table.Header>Contact</Table.Header>
              <Table.Header>Country</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Alfreds Futterkiste</Table.Cell>
              <Table.Cell>Maria Anders</Table.Cell>
              <Table.Cell>Germany</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Centro comercial Moctezuma</Table.Cell>
              <Table.Cell>Francisco Chang</Table.Cell>
              <Table.Cell>Mexico</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Table size="lg">
          <Table.Head>
            <Table.Row>
              <Table.Header>Company</Table.Header>
              <Table.Header>Contact</Table.Header>
              <Table.Header>Country</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Alfreds Futterkiste</Table.Cell>
              <Table.Cell>Maria Anders</Table.Cell>
              <Table.Cell>Germany</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Centro comercial Moctezuma</Table.Cell>
              <Table.Cell>Francisco Chang</Table.Cell>
              <Table.Cell>Mexico</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Table size="xl">
          <Table.Head>
            <Table.Row>
              <Table.Header>Company</Table.Header>
              <Table.Header>Contact</Table.Header>
              <Table.Header>Country</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Alfreds Futterkiste</Table.Cell>
              <Table.Cell>Maria Anders</Table.Cell>
              <Table.Cell>Germany</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Centro comercial Moctezuma</Table.Cell>
              <Table.Cell>Francisco Chang</Table.Cell>
              <Table.Cell>Mexico</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <Table size="2xl" className="border-spacing-y-4">
          <Table.Head>
            <Table.Row>
              <Table.Header>Company</Table.Header>
              <Table.Header>Contact</Table.Header>
              <Table.Header>Country</Table.Header>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Alfreds Futterkiste</Table.Cell>
              <Table.Cell>Maria Anders</Table.Cell>
              <Table.Cell>Germany</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Centro comercial Moctezuma</Table.Cell>
              <Table.Cell>Francisco Chang</Table.Cell>
              <Table.Cell>Mexico</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table> */}

      {/* <Accordion size="sm" disabled>
          <Accordion.Summary>
            SM <ControlsChevronDownSmall />
          </Accordion.Summary>
          <Accordion.Content>
            <p>{text}</p>
          </Accordion.Content>
        </Accordion>

        <Accordion size="md">
          <Accordion.Summary>
            MD <ControlsChevronDownSmall />
          </Accordion.Summary>
          <Accordion.Content>
            <p>{text}</p>
          </Accordion.Content>
        </Accordion>

        <Accordion size="lg">
          <Accordion.Summary>
            LG <ControlsChevronDownSmall />
          </Accordion.Summary>
          <Accordion.Content>
            <p>{text}</p>
          </Accordion.Content>
        </Accordion>

        <Accordion size="xl">
          <Accordion.Summary>
            XL <ControlsChevronDownSmall />
          </Accordion.Summary>
          <Accordion.Content>
            <p>{text}</p>
          </Accordion.Content>
        </Accordion>
      </div>

      <div className="flex flex-wrap items-center justify-around p-4 gap-2 w-full bg-goku text-moon-14 rounded-moon-s-sm">
        <Accordion size="sm">
          <Accordion.Summary>
            SM <ControlsChevronDownSmall />
          </Accordion.Summary>
          <Accordion.ContentOutside>
            <p>{text}</p>
          </Accordion.ContentOutside>
        </Accordion>

        <Accordion>
          <Accordion.Summary>
            MD <ControlsChevronDownSmall />
          </Accordion.Summary>
          <Accordion.ContentOutside>
            <p>{text}</p>
          </Accordion.ContentOutside>
        </Accordion>

        <Accordion size="lg">
          <Accordion.Summary>
            LG <ControlsChevronDownSmall />
          </Accordion.Summary>
          <Accordion.ContentOutside>
            <p>{text}</p>
          </Accordion.ContentOutside>
        </Accordion>

        <Accordion size="xl">
          <Accordion.Summary>
            XL <ControlsChevronDownSmall />
          </Accordion.Summary>
          <Accordion.ContentOutside>
            <p>{text}</p>
          </Accordion.ContentOutside>
        </Accordion>
      </div> */}
    </div>
  );
};

export default ServerDoc;
