import React, { useState } from 'react';
import type Props from './types/Props';
import IconButton from '../../iconButton/IconButton';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import useClickOutside from '../../private/hooks/useClickOutside';
import ArrowsRight from '../../private/icons/ArrowsRight';
import Other3DotsHorizontal from '../../private/icons/Other3DotsHorizontal';

const Collapsed = ({ breadcrumbs, divider }: Props) => {
  const [isOpen, toggleDropdown] = useState(false);
  const [ref, hasClickedOutside] = useClickOutside();
  const restBreadcrumbs: React.ReactNode[] = [];
  const collapseBreadcrumbs = breadcrumbs
    .map((crumb, index) => {
      if (index === 0) return crumb;
      if (index > breadcrumbs.length - 3) {
        return crumb;
      } else {
        restBreadcrumbs.push(crumb);
      }
    })
    .filter((crumd) => crumd);
  const clickHandle = () => toggleDropdown(!isOpen);
  React.useEffect(() => {
    if (hasClickedOutside) {
      toggleDropdown(false);
    }
  });
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-2 items-center text-moon-14">
        <li key={'crumb' + 0} className="flex items-center gap-2 text-trunks">
          <span className="text-trunks transition-colors duration-200 hover:text-bulma">
            {collapseBreadcrumbs && collapseBreadcrumbs[0]}
          </span>
          {divider ? divider : <ArrowsRight className="rtl:rotate-180" />}
        </li>
        {restBreadcrumbs?.length !== 0 && (
          <li key={'crumb' + 1} ref={ref} className="relative">
            <IconButton
              variant="ghost"
              size="xs"
              onClick={clickHandle}
              icon={<Other3DotsHorizontal className="text-moon-16" />}
              aria-label="Show more breadcrumbs"
            />
            {isOpen && (
              <ol className="absolute start-0 top-full bg-goku p-1 mt-3 flex flex-col gap-2 shadow-moon-lg rounded-moon-s-md z-10000 min-w-[8.5rem]">
                {restBreadcrumbs.map((crumb, index) => (
                  <li
                    key={'innercrumb' + index}
                    className="flex flex-col items-stretch text-bulma text-moon-14 p-2 rounded-moon-i-xs cursor-pointer transition-colors hover:bg-heles"
                  >
                    {crumb}
                  </li>
                ))}
              </ol>
            )}
          </li>
        )}
        {collapseBreadcrumbs?.length !== 0 &&
          collapseBreadcrumbs.map((crumb, index) => {
            if (index === 0) return null;
            return (
              <li
                key={'crumb' + index + 1}
                className="flex items-center gap-2 text-trunks"
              >
                {divider ? (
                  divider
                ) : (
                  <ArrowsRight className="rtl:rotate-180 text-moon-16" />
                )}
                <span
                  className={mergeClassnames(
                    'text-trunks transition-colors duration-200 hover:text-bulma',
                    index === collapseBreadcrumbs.length - 1 &&
                      'text-bulma font-medium'
                  )}
                >
                  {crumb && crumb}
                </span>
              </li>
            );
          })}
      </ol>
    </nav>
  );
};

export default Collapsed;
