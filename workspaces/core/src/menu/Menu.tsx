import React, { Fragment, useState, KeyboardEvent, useRef } from 'react';
import { Menu as HeadlessMenu } from '@headlessui/react';
import {
  GenericLike,
  ControlsChevronRight,
  SportBadminton,
} from '@heathmont/moon-icons-tw';
import Button from '../button/Button';
import MenuItem from '../menuItem/MenuItem';

const links = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
];

const MenuList = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  console.log('activeIndex: ', activeIndex);

  const onPressHandler = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(' Press ... ', event.code);
    if (event.key === 'Enter') {
      console.log(' Press Enter ');
      setActiveIndex(index);
    }
  };
  return (
    <HeadlessMenu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      {links.map((link, index) => (
        /* Use the `active` state to conditionally style the active item. */
        <HeadlessMenu.Item
          as="span"
          onKeyDown={() => console.log('onKeyPress222')}
        >
          {({ active }) => {
            const isSelected = activeIndex === index || active;
            return (
              <MenuItem
                role="сheckbox"
                isSelected={isSelected}
                onClick={() => setActiveIndex(index)}
                onKeyDown={() => console.log('onKeyPress222')}
              >
                <MenuItem.Title> {link.label}</MenuItem.Title>
                <MenuItem.Radio isSelected={activeIndex === index} />
              </MenuItem>
            );
          }}
        </HeadlessMenu.Item>
      ))}
    </HeadlessMenu.Items>
  );
};

const Menu = () => {
  const divRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <HeadlessMenu as="div" className="relative">
        <HeadlessMenu.Button as={Fragment}>
          <Button>Options</Button>
        </HeadlessMenu.Button>
        <MenuList />
      </HeadlessMenu>
      <button onKeyPress={() => console.log('onKeyPress')}>
        onPressHandler
      </button>

      <div className="flex flex-col gap-2 w-[280px] max-w-[280px]">
        <MenuItem as="a" href="">
          Your value
        </MenuItem>

        <MenuItem ref={divRef}>
          <MenuItem.Title>Your value</MenuItem.Title>
          <span className="text-moon-12 text-trunks">Meta</span>
        </MenuItem>

        <MenuItem>
          <MenuItem.Title>Your value</MenuItem.Title>
          <SportBadminton className="text-[1.5rem]" />
        </MenuItem>

        <MenuItem role="сheckbox">
          <MenuItem.Checkbox />
          <MenuItem.Title>Your value</MenuItem.Title>
        </MenuItem>

        <MenuItem role="сheckbox">
          <MenuItem.Title>Your value</MenuItem.Title>
          <MenuItem.Checkbox />
        </MenuItem>

        <MenuItem role="radio">
          <MenuItem.Radio />
          <MenuItem.Title>Your value</MenuItem.Title>
        </MenuItem>

        <MenuItem role="radio">
          <MenuItem.Title>Your value</MenuItem.Title>
          <MenuItem.Radio isSelected={true} />
        </MenuItem>

        <MenuItem role="сheckbox">
          <GenericLike className="text-chiChi text-[1.5rem]" />
          <MenuItem.Title>Menu 4</MenuItem.Title>
          <GenericLike className="text-chiChi text-[1.5rem]" />
        </MenuItem>

        <MenuItem role="сheckbox">
          <MenuItem.Title>Menu 4</MenuItem.Title>
          <MenuItem.Checkbox />
        </MenuItem>

        <MenuItem role="сheckbox">
          <MenuItem.Checkbox />
          <MenuItem.MultiTitle
            title="Your value"
            text="1234 Lorem Ipsum is simply dummy text of the printing and typesetting
                industry"
          />
          <span className="text-moon-12 text-trunks">Meta</span>
        </MenuItem>

        <MenuItem role="сheckbox">
          <MenuItem.Checkbox />
          <MenuItem.Title>
            <span className="block text-bulma text-moon-14">Your value</span>
            <span className="flex text-trunks text-moon-12">
              <span className="flex-1 truncate">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </span>
            </span>
          </MenuItem.Title>
          <span className="text-moon-12 text-trunks">Meta</span>
        </MenuItem>

        <MenuItem role="сheckbox">
          <MenuItem.Title>
            <span className="block text-bulma text-moon-14">Your value</span>
            <span className="flex text-trunks text-moon-12">
              <span className="flex-1 truncate">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </span>
            </span>
          </MenuItem.Title>
          <span className="text-moon-12 text-trunks">Meta</span>
          <MenuItem.Checkbox />
        </MenuItem>

        <MenuItem role="сheckbox" isSelected={true}>
          <span>
            <GenericLike className="text-chiChi text-[1.5rem]" />
          </span>
          <MenuItem.Title>
            <span className="block text-bulma text-moon-14">Your value</span>
            <span className="flex text-trunks text-moon-12">
              <span className="flex-1 truncate">
                2 Lorem Ipsum is simply dummy text of the printing and
                typesetting industry
              </span>
            </span>
          </MenuItem.Title>
          <span className="px-2">
            <MenuItem.Checkbox isSelected={true} />
          </span>
        </MenuItem>

        <MenuItem role="radio">
          <MenuItem.Title>Menu 1</MenuItem.Title>
          <MenuItem.Radio />
        </MenuItem>

        <MenuItem role="radio" isSelected={true}>
          <MenuItem.Title>Menu 2</MenuItem.Title>
          <MenuItem.Radio isSelected={true} />
        </MenuItem>

        <MenuItem role="radio">
          <MenuItem.Radio />
          <MenuItem.Title>Menu 2</MenuItem.Title>
        </MenuItem>

        <MenuItem>
          <ControlsChevronRight className="text-chiChi text-[1.5rem]" />
          <GenericLike className="text-chiChi text-[1.5rem]" />
          <MenuItem.Title>Menu 2</MenuItem.Title>
        </MenuItem>

        <MenuItem as="a" href="/core/menuItem">
          Link 1
        </MenuItem>
      </div>
    </>
  );
};

export default Menu;