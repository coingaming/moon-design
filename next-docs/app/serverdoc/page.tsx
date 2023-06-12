import React from 'react';
import { Accordion } from '@heathmont/moon-base-tw';
import { ControlsChevronDownSmall } from '@heathmont/moon-icons-tw';

const ServerDoc: React.FC = () => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  return (
    <div className="flex flex-col p-5 gap-6">
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
      <div className="flex flex-wrap items-center justify-around p-4 gap-2 w-full bg-goku text-moon-14 rounded-moon-s-sm">
        <Accordion size="sm" disabled>
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
      </div>
    </div>
  );
};

export default ServerDoc;
