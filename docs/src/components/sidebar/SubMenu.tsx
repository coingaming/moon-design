import React from 'react';

const SubMenuItem = ({ title, route }) => {
  const locationPathname =
    typeof window !== `undefined` ? window && window.location.pathname : null;
  const isCurrent = locationPathname?.includes(route);

  return (
    <a
      href={route}
      className={`${
        isCurrent ? 'bg-gray-100 text-piccolo' : ''
      } group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-piccolo rounded-md hover:text-gray-900 hover:bg-gray-50`}
    >
      {title}
    </a>
  );
};

export const SubMenu = ({ title, items, isActive }) => {
  const [isExpanded, setIsExpanded] = React.useState(isActive);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="space-y-1">
      <button
        type="button"
        onClick={toggleExpand}
        className={`group w-full flex items-center pl-2 pr-1 py-2 text-sm font-medium rounded-md ${
          isActive
            ? 'bg-gray-100 text-piccolo'
            : 'bg-white text-piccolo hover:text-piccolo hover:bg-gray-50'
        } focus:outline-none`}
      >
        {/* Heroicon name: users */}
        <svg
          className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
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
