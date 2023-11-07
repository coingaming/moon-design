import React from 'react';
import type Props from './types/Props';
import mergeClassnames from '../../mergeClassnames/mergeClassnames';
import ArrowsRight from '../../private/icons/ArrowsRight';

const Extended = ({ breadcrumbs, divider, ...rest }: Props) => (
  <nav aria-label="Breadcrumb" {...rest}>
    <ol className="flex flex-wrap gap-2 items-center text-moon-14">
      {breadcrumbs.length > 0 &&
        breadcrumbs.map((crumb, index) => (
          <li
            key={'crumb' + index}
            className="flex items-center gap-2 text-trunks"
          >
            {index !== 0 &&
              (divider ? (
                divider
              ) : (
                <ArrowsRight className="rtl:rotate-180 text-moon-16" />
              ))}
            <span
              className={mergeClassnames(
                'text-trunks transition-colors duration-200 hover:text-bulma',
                index === breadcrumbs.length - 1 && 'text-bulma font-medium'
              )}
            >
              {crumb && crumb}
            </span>
          </li>
        ))}
    </ol>
  </nav>
);

export default Extended;
