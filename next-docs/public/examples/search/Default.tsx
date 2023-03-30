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
        clear={<span>Clear</span>}
        autoFocus={true}
      >
        {filteredItems.length ? (
          filteredItems.map((list: any) => (
            <Search.List key={list.id}>
              <Search.ListHeading>{list.heading}</Search.ListHeading>
              {list.items.map(({ id, children, href, ...rest }: any) => (
                <Search.ListItem
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
                </Search.ListItem>
              ))}
            </Search.List>
          ))
        ) : (
          <Search.NoResults />
        )}
      </Search>
    </div>
  );
};

export default Example;
