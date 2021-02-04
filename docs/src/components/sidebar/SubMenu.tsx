import React from 'react';

import IconPicture from '../../assets/svg/icons/icon-picture.svg';
import IconChartArea from '../../assets/svg/icons/icon-chart-area.svg';
import IconSliders from '../../assets/svg/icons/icon-sliders.svg';
import IconTag from '../../assets/svg/icons/icon-tag.svg';
import IconTable from '../../assets/svg/icons/icon-table.svg';
import IconListNumbered from '../../assets/svg/icons/icon-list-numbered.svg';
import IconGlobe from '../../assets/svg/icons/icon-globe.svg';
import IconStarEmpty from '../../assets/svg/icons/icon-star-empty.svg';
import IconSettings from '../../assets/svg/icons/icon-settings.svg';

const SubMenuItem = ({ title, route }) => {
  const locationPathname =
    typeof window !== `undefined` ? window && window.location.pathname : null;
  const isCurrent = locationPathname?.includes(route);

  return (
    <a
      href={route}
      className={`${
        isCurrent ? 'bg-hit-80' : ''
      } hover:bg-hit-80 group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-piccolo rounded-md`}
    >
      {title}
    </a>
  );
};

const SubMenuIcons = {
  Themes: <IconSliders className="mr-3 h-6 w-6" />,
  Assets: <IconPicture className="mr-3 h-6 w-6" />,
  'Design System': <IconTag className="mr-3 h-6 w-6" />,
  Toolkit: <IconTable className="mr-3 h-6 w-6" />,
  Components: <IconListNumbered className="mr-3 h-6 w-6" />,
  Global: <IconGlobe className="mr-3 h-6 w-6" />,
  Private: <IconStarEmpty className="mr-3 h-6 w-6" />,
  Charts: <IconChartArea className="mr-3 h-6 w-6" />,
  Utils: <IconSettings className="mr-3 h-6 w-6" />,
  //   <IconStarEmpty />
};
interface ISubMenu {
  title: string;
  items: Element[];
  isActive: boolean;
}

export const SubMenu: React.FC<ISubMenu> = ({ title, items, isActive }) => {
  const [isExpanded, setIsExpanded] = React.useState(isActive);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  console.log(title);
  return (
    <div className="space-y-1">
      <button
        type="button"
        onClick={toggleExpand}
        className={`group w-full flex items-center pl-2 pr-1 py-2 text-sm font-medium rounded-md ${
          isActive
            ? 'text-piccolo bg-hit-80'
            : 'text-piccolo hover:bg-hit-80'
        } focus:outline-none`}
      >
        {SubMenuIcons[title] || <IconStarEmpty className=" mr-3 h-6 w-6" />}
        {title}
        <svg
          className={`${
            isExpanded ? 'text-piccolo rotate-90' : 'text-gray-300'
          } ml-auto h-5 w-5 transform group-hover:text-piccolo transition-colors ease-in-out duration-150`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
        </svg>
      </button>
      {/* Expandable link section, show/hide based on state. */}
      {isExpanded && (
        <div className="space-y-1">
          {items.map(
            (subMenuItem: {
              name: string | number | undefined;
              route: string;
            }) => {
              return (
                <SubMenuItem
                  key={subMenuItem.name}
                  title={subMenuItem.name}
                  route={subMenuItem.route}
                />
              );
            }
          )}
        </div>
      )}
    </div>
  );
};
