import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { PagesData, Frontmatter } from '../../types';
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

type MenuItemProps = Frontmatter & {
  section?: boolean;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  pages?: any;
};

export const Sidebar: React.FC<any> = () => {
  const locationPathname =
    typeof window !== `undefined` ? window && window.location.pathname : null;
  const isCurrentLocation = (pages: [MenuItemProps]) => {
    return (
      pages && pages.some((item) => locationPathname?.includes(item.route))
    );
  };

  return (
    <StaticQuery
      query={sidebar}
      render={(data: PagesData) => (
        <div className="flex flex-col flex-grow pt-5 pb-4 bg-gohan overflow-y-auto">
          <a href="/" className="flex items-center flex-shrink-0 px-4">
            <IconLogoMoonDesign className="h-8 w-auto text-bulma" />
          </a>
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
                      isActive={isCurrentLocation(item.route)}
                    />
                  );
                }
                return (
                  <SubMenu
                    key={item.name}
                    title={item.name}
                    items={item.pages}
                    isActive={isCurrentLocation(item.pages)}
                  />
                );
              })}
            </nav>
          </div>
        </div>
      )}
    />
  );
};
