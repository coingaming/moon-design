import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import { PagesData } from '../../types';
import { transformSections } from '../nav/transform';
import IconLogoMoonDesign from '../../assets/svg/logos/logo-moon-design.svg';

import { MenuItem } from './MenuItem';
import { SubMenu } from './SubMenu';

const sidebar = graphql`
  query {
    pages: allMdx {
      edges {
        node {
          frontmatter {
            name
            menu
            route
          }
        }
      }
    }
    config: allDocsJson {
      edges {
        node {
          menuSections
        }
      }
    }
  }
`;

// type MenuItemProps = Frontmatter & {
//   section?: boolean;
//   /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
//   pages?: any;
// };

export const Sidebar: React.FC<any> = () => (
    <StaticQuery
      query={sidebar}
      render={(data: PagesData) => (
        <div className="flex flex-col flex-grow pt-5 pb-4 bg-gohan overflow-y-auto">
          <Link to="/" className="flex items-center flex-shrink-0 px-4">
            <IconLogoMoonDesign className="h-8 w-auto text-bulma" />
          </Link>
          <div className="mt-5 flex-grow flex flex-col">
            <nav
              className="flex-1 px-2 space-y-1 bg-gohan"
              aria-label="Sidebar"
            >
              {transformSections(data).map((item) => {
                if (!item.pages) {
                  return (
                    <MenuItem
                      key={item.name}
                      title={item.name}
                      route={item.route}
                      isActive={false}
                    />
                  );
                }
                return (
                  <SubMenu
                    key={item.name}
                    title={item.name}
                    items={item.pages}
                    isActive={false}
                  />
                );
              })}
            </nav>
          </div>
        </div>
      )}
    />
);
