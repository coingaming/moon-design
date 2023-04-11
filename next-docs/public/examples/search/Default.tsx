import { useState } from 'react';
import {
  MenuItem,
  Search,
  searchFilterItems,
  searchGetItemIndex,
} from '@heathmont/moon-core-tw';

const Example = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState('');

  const filteredItems = searchFilterItems(
    [
      {
        heading: 'Home',
        id: 'home',
        items: [
          {
            id: 'home',
            children: 'Home',
            href: '#home',
          },
          {
            id: 'settings',
            children: 'Settings',
            href: '#settings',
          },
          {
            id: 'projects',
            children: 'Projects',
            closeOnSelect: false,
            onClick: () => {
              alert('projects');
            },
          },
        ],
      },
      {
        heading: 'Other',
        id: 'advanced',
        items: [
          {
            id: 'developer-settings',
            children: 'Developer settings',
            href: '#developer-settings',
          },
          {
            id: 'privacy-policy',
            children: 'Privacy policy',
            href: '#privacy-policy',
          },
          {
            id: 'log-out',
            children: 'Log out',
            onClick: () => {
              alert('Logging out...');
            },
          },
        ],
      },
    ],
    search
  );

  return (
    <div className="w-full xl:mx-32">
      <Search
        onChangeSearch={setSearch}
        onChangeOpen={setOpen}
        search={search}
        isOpen={open}
      >
        <Search.Input>
          <Search.Input.Icon />
          <Search.Input.Input />
          <Search.Input.ButtonClear>
            Clear
          </Search.Input.ButtonClear>
        </Search.Input>

        <Search.Transition>
          <Search.Result>
            {filteredItems.length ? (
              filteredItems.map((list: any) => (
                <ul className='space-y-1'>
                  <li>
                    <Search.ResultHeading>{list.heading}</Search.ResultHeading>
                    {list.items.map(({ id, children, href, ...rest }: any) => (
                      <Search.ResultItem
                        key={id}
                        index={searchGetItemIndex(filteredItems, id)}
                        closeOnSelect={true}
                        {...rest}
                      >
                        {(selected: boolean) =>
                          href ? (
                            <a href={href}>
                              <MenuItem isActive={selected}>
                                <MenuItem.Title>{children}</MenuItem.Title>
                                <span className="text-moon-12 text-trunks">
                                  {href}
                                </span>
                              </MenuItem>
                            </a>
                          ) : (
                            <MenuItem isActive={selected}>
                              <MenuItem.Title>{children}</MenuItem.Title>
                              <span className="text-moon-12 text-trunks">Action</span>
                            </MenuItem>
                          )
                        }
                      </Search.ResultItem>
                    ))}
                  </li>
                </ul>
              ))
            ) : (
              <Search.NoResults />
            )}
          </Search.Result>
        </Search.Transition>
      </Search>
    </div>
  );
};

export default Example;
